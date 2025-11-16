let boxes = document.querySelectorAll('.imageContainer');

boxes.forEach(box =>{
    let img =box.childNodes[3];

    box.addEventListener('mouseenter',()=>{
        img.style.opacity= 1;
    });
    box.addEventListener('mouseleave',()=>{
        img.style.opacity= 0;
    });

    box.addEventListener('mousemove',(event)=>{
        img.style.left= event.offsetX+'px';
        img.style.top= event.offsetY+'px';
    })
});

