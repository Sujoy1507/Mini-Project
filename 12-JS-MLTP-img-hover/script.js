let boxes = document.querySelectorAll('.imageContainer');

boxes.forEach(box =>{
    let img = box.querySelector('img');

    box.addEventListener('mousemove',(event)=>{
        img.style.left= event.offsetX+'px';
        img.style.top= event.offsetY+'px';
        img.style.display= 'initial';

        setTimeout(() => {
            img.style.display="none";
        }, 1000);
    })
});

