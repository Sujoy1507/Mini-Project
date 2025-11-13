let h2 = document.querySelector('h2');
let inc = document.querySelector('#bttn1');
let dec = document.querySelector('#bttn2');
let count = 0;
inc.addEventListener("click",function () {
    count++;
    h2.textContent=count;
})

dec.addEventListener("click",function () {
    count--;
    h2.textContent=count;
})