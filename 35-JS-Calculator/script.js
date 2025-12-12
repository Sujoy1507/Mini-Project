const result = document.querySelector(".result");
const firstVal = document.querySelector(".first-val");
const secondVal = document.querySelector(".second-val");

const allNumbers = document.querySelectorAll(".number");
const allOperators = document.querySelectorAll(".operator");

const dot = document.querySelector(".dot");
const enter = document.querySelector(".enter");
const clear = document.querySelector(".clear");
const allClear = document.querySelector(".all-clear");

let currentInput = "";
let operand1 = "";
let operand2 = "";
let currentOperator = "";
let shouldReset = false;

allNumbers.forEach((num) => {
    num.addEventListener("click", (val) => {
        const digit = val.target.textContent.trim();
        if (shouldReset) {
            currentInput = "";
            shouldReset = false;
        }
        if (digit === "." && currentInput.includes(".")) return;
        currentInput += digit;
        secondVal.textContent = currentInput || "0";
    });
});
