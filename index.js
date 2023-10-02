feather.replace();

window.addEventListener('load', function () {
    setTimeout(function () {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('fade-out');
    }, 100);
});

const parallaxContainer = document.querySelector('.parallax-container');
const parallaxLayer = document.querySelector('.parallax-layer');

parallaxContainer.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const xOffset = (x - 0.5) * 20;
    const yOffset = (y - 0.5) * 20;

    parallaxLayer.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(1.1)`;
});