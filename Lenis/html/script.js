// Initialize Lenis
const lenis = new Lenis({
    duration: 1.5,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const elem = document.querySelectorAll(".elem");

elem.forEach((el) => {
    let img = el.querySelector("img");

    const tl = gsap.timeline();
    let xTransform = gsap.utils.random(-100, 100);

    tl.set(img, {
        transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
    },'start')

        .to(img, {
            scale:0,
            ease: "none",
            scrollTrigger: {
                trigger: el,
                start:'top top',
                end:'bottom top',
                scrub: true,
                
            }
        },'start')
        .to(el,{
            xPercent:xTransform,
            ease:Power2.easeInOut,
            scrollTrigger: {
                trigger:img,
                start:'top bottom',
                end:'bottom top',
                scrub: true,
            }
        })
});
