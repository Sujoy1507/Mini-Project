let imgSec = document.querySelector(".img-sec");
let i = document.querySelector("i");

imgSec.addEventListener("dblclick", () => {
    i.style.transform = "translate(-50%,-50%) scale(1)";
    i.style.opacity = 1;
    i.style.transition = "all 0.6s ease";

    setTimeout(() => {
        i.style.transform = "translate(-50%,-500%) scale(1) rotate(60deg)";
    }, 700);

    setTimeout(() => {
        i.style.opacity = 0;
        i.style.transform = "translate(-50%,-500%) scale(1) rotate(0deg)";
    }, 1000);
});
