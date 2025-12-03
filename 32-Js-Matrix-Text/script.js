const allParas = document.querySelectorAll(".para");

allParas.forEach((val) => {
    let para = val.textContent;

    let charecter = "abcdefghijklmnopqrstuvwxyz";

    let intervalId;

    val.addEventListener("mouseenter", () => {
        let itrationCount = 0;

        intervalId = setInterval(() => {
            function randomTExt() {
                let str = para
                    .split("")
                    .map((val, index) => {
                        if(index<itrationCount){
                            return para[index]
                        }

                        return charecter.split("")[
                            Math.floor(Math.random() * charecter.length)
                        ];
                    })
                    .join("");

                val.textContent = str;
                itrationCount++
            }
            randomTExt();
        }, 60);
    });

    val.addEventListener('mouseleave',()=>{
        clearInterval(intervalId)
    })
});
