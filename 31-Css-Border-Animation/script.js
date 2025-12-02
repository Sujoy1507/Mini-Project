let sentence = document.querySelectorAll("h1");

sentence.forEach((val) => {
    let para = val.textContent;
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz";
    let intervalId;

    let itration = 0;
    function randomText() {
        let str = para
            .split("")
            .map((val, index) => {
                if (index < itration) {
                    return val;
                }

                return characters.split("")[
                    Math.floor(Math.random() * characters.length)
                ];
            })
            .join("");

        itration++;
        val.textContent = str;
        console.log("sujoy");
    }

    val.addEventListener("mouseenter", () => {
        intervalId = setInterval(() => {
            randomText();
        }, 30);
    });

    val.addEventListener("mouseleave", () => {
        clearInterval(intervalId);
        itration = 0;
    });
});


let two = document.querySelector('.two');

document.addEventListener("mousemove", (event) => {
    document.body.style.setProperty("--x", event.clientX + "px");
    document.body.style.setProperty("--y", event.clientY + "px");
});