// Floating bubbles
for (let i = 0; i < 30; i++) {
    let bubble = document.createElement('div');
    bubble.className = 'bubble';
    let size = Math.random() * 15 + 5; // 5px to 20px
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.querySelector('main').appendChild(bubble);
}

// Optional: floating hearts in overlay
const loveOverlay = document.querySelectorAll('.love-overlay');
loveOverlay.forEach(heart => {
    setInterval(() => {
        heart.style.transform = `translateY(${Math.random() * 10}px) scale(1.1)`;
        setTimeout(() => heart.style.transform = 'translateY(0) scale(1.1)', 250);
    }, 500);
});
