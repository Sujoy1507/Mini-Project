let container = document.querySelector(".container");

// AUDION -- PIANO NOTE

const notes = [
    { key: "z", note: "./Audio/A0.mp3" },
    { key: "x", note: "./Audio/A1.mp3" },
    { key: "c", note: "./Audio/A2.mp3" },
    { key: "v", note: "./Audio/A3.mp3" },
    { key: "b", note: "./Audio/A4.mp3" },
    { key: "n", note: "./Audio/A5.mp3" },
    { key: "m", note: "./Audio/A6.mp3" },
    { key: ",", note: "./Audio/A7.mp3" },

    { key: "a", note: "./Audio/C1.mp3" },
    { key: "s", note: "./Audio/C2.mp3" },
    { key: "d", note: "./Audio/C3.mp3" },
    { key: "f", note: "./Audio/C4.mp3" },
    { key: "g", note: "./Audio/C5.mp3" },
    { key: "h", note: "./Audio/C6.mp3" },
    { key: "j", note: "./Audio/C7.mp3" },
    { key: "k", note: "./Audio/C8.mp3" },

    { key: "q", note: "./Audio/Ds1.mp3" },
    { key: "w", note: "./Audio/Ds2.mp3" },
    { key: "e", note: "./Audio/Ds3.mp3" },
    { key: "r", note: "./Audio/Ds4.mp3" },
    { key: "t", note: "./Audio/Ds5.mp3" },
    { key: "y", note: "./Audio/Ds6.mp3" },
    { key: "u", note: "./Audio/Ds7.mp3" },

    { key: "1", note: "./Audio/Fs1.mp3" },
    { key: "2", note: "./Audio/Fs2.mp3" },
    { key: "3", note: "./Audio/Fs3.mp3" },
    { key: "4", note: "./Audio/Fs4.mp3" },
    { key: "5", note: "./Audio/Fs5.mp3" },
    { key: "6", note: "./Audio/Fs6.mp3" },
    { key: "7", note: "./Audio/Fs7.mp3" },
];

for (let i = 97; i <= 122; i++) {
    let div = document.createElement("div");
    div.className = "piano-key";
    div.textContent = String.fromCharCode(i);
    container.appendChild(div);
    div.setAttribute("data-key", div.textContent);
}

for (let i = 0; i <= 9; i++) {
    let div = document.createElement("div");
    div.className = "piano-key";
    div.textContent = i;
    container.appendChild(div);
    div.setAttribute("data-key", div.textContent);
}

document.addEventListener("keydown", (event) => {
    let key = event.key.toLocaleLowerCase();
    notes.forEach(element => {
        if (key === element.key){
            let audio = new Audio(element.note);
            audio.currentTime=0;
            audio.play();
        }
    });


    let div = document.querySelector(`.piano-key[data-key='${key}']`);

    if (div) {
        div.classList.add("active");
    }
    setTimeout(() => {
        div.classList.remove("active");
    }, 150);
});
