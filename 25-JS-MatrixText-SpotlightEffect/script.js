document.addEventListener("mousemove", (event) => {
    document.body.style.setProperty("--x", event.clientX + "px");
    document.body.style.setProperty("--y", event.clientY + "px");
});

const paras = document.querySelectorAll("p");
let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

paras.forEach((para) => {
    const text = para.innerText;
    let original = para.innerHTML;
    let randomText;

    para.addEventListener("mouseenter", () => {
        randomText = setInterval(() => {
            const str = text
                .split("")
                .map((val, index) => {
                    return characters.split("")[Math.floor(Math.random() * 53)];
                })
                .join("");

            para.innerText = str;
        }, 100);
    });

    para.addEventListener("mouseleave", () => {
        clearInterval(randomText);
        para.innerHTML = original;
    });
});
