// Floating bubbles
for (let i = 0; i < 20; i++) {
    let bubble = document.createElement('div');
    bubble.className = 'bubble';
    let size = Math.random() * 15 + 5;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.animationDuration = (4 + Math.random() * 6) + 's';
    document.querySelector('main').appendChild(bubble);
}

// Floating heart overlay
document.querySelectorAll('.love-overlay').forEach(heart => {
    setInterval(() => {
        heart.style.transform = `translateY(${Math.random() * 10}px) scale(1.1)`;
        setTimeout(() => heart.style.transform = 'translateY(0) scale(1.1)', 250);
    }, 500);
});

// Click image overlay toggle
document.querySelectorAll('.img-wrapper').forEach(wrapper => {
    let hideTimeout, isVisible = false;
    wrapper.addEventListener('click', e => {
        e.preventDefault();
        const overlay = wrapper.querySelector('.love-overlay');
        if (!isVisible) {
            overlay.style.opacity = '1';
            isVisible = true;
            hideTimeout = setTimeout(() => {
                overlay.style.opacity = '0';
                isVisible = false;
            }, 2000);
        } else {
            overlay.style.opacity = '0';
            isVisible = false;
            clearTimeout(hideTimeout);
        }
    });
});

// 🌸 Full-page emoji spread without layout shift
const textSection = document.querySelector('.text-section');
const page05 = document.querySelector('.page05');
const emojis = ['🌸', '💖', '✨', '💕', '🌺', '💐'];

textSection.addEventListener('click', () => {
    const rect = textSection.getBoundingClientRect();
    const pageRect = page05.getBoundingClientRect();
    const originX = rect.left + rect.width / 2 - pageRect.left;
    const originY = rect.top + rect.height / 2 - pageRect.top;

    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'spreading-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = originX + 'px';
        emoji.style.top = originY + 'px';
        emoji.style.position = 'absolute';

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * (Math.min(pageRect.width, pageRect.height) / 1.2);
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        emoji.style.setProperty('--tx', tx + 'px');
        emoji.style.setProperty('--ty', ty + 'px');
        emoji.style.animation = `spreadEmoji 3.5s ease-out forwards`;

        // Spin animation
        emoji.animate([{ rotate: '0deg' }, { rotate: '360deg' }], {
            duration: 2000 + Math.random() * 2000,
            iterations: Infinity
        });

        page05.appendChild(emoji);
        setTimeout(() => emoji.remove(), 3500);
    }
});
