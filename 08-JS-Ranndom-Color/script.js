let botton = document.querySelector("#botton");
let squeare = document.querySelector("#squeare");
let main = document.querySelector("main");
let body = document.querySelector("body");

botton.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let c = Math.floor(Math.random() * 100);

    squeare.style.backgroundColor = `hsl(${c},${b}%,${a}%)`;
    botton.style.backgroundColor = `hsl(${b},${c}%,${a}%)`;
    main.style.backgroundColor = `hsl(${a},${b}%,${c}%)`;
    body.style.backgroundColor = `hsl(${b},${c}%,${a}%)`;
});
