let button = document.querySelector('button');
let inner = document.querySelector('.inner');
let grow = 0;
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

button.addEventListener('click',()=>{
    button.style.pointerEvents='none';
    let width = 30+(Math.floor(Math.random()*50));
    
    let int = setInterval(() => {
        grow++;
        
        h1.textContent=grow+'%';
        h2.textContent=` Youe Download will end in ${width/10} second`;
        inner.style.width=grow+'%';
    }, width);

    setTimeout(()=>{
        clearInterval(int)
    },width*100)
    
})