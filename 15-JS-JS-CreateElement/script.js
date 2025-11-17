let main = document.querySelector("main");
let button = document.querySelector("button");

let count = 0;
main.addEventListener("mousemove", (val) => {
    let div = document.createElement("div");
    let x = 100;
    let xa = Math.floor(Math.random() * 100);
    let ya = Math.floor(Math.random() * 100);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let size = Math.floor(Math.random() * 50);

    div.style.height = size + "px";
    div.style.width = size + "px";
    div.style.position = "absolute";
    div.style.borderRadius = 50 + "%";
    div.style.top = xa + "%";
    div.style.left = ya + "%";
    div.style.backgroundColor = `rgb(${r},${g},${b})`;

    main.appendChild(div);
    count++;

    if (main.children.length >= 100) {
        main.firstElementChild.remove();
    }
});
