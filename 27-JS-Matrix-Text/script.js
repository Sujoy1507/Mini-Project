let text = document.querySelectorAll('p');
let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';


text.forEach(para => {
    let original = para.innerHTML;
    let word = para.innerText;
    let itration = 0;

    function randomText() {
        let str = word.split('').map((val,index)=>{
            if(index<itration){
                return val
            }
        
        return character.split("")[Math.floor(Math.random()*53)]
    }).join("");
    para.innerText=str

    itration+=.2
    }
    setInterval(randomText,30)

});