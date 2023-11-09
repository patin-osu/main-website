alert('Tap/click anywhere to listen to song')

const parallaxContainer = document.querySelector('.parallax-container');
const parallaxBackgrounds = document.querySelectorAll('.parallax-background');

const parallaxCenterX = parallaxContainer.offsetWidth / 2;
const parallaxCenterY = parallaxContainer.offsetHeight / 2;

parallaxContainer.addEventListener('mousemove', (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    // Calculate parallax offsets relative to the center of the screen
    for (let i = 0; i < parallaxBackgrounds.length; i++) {
        const parallaxBackground = parallaxBackgrounds[i];

        const parallaxOffset = (mouseX - parallaxCenterX) / parallaxContainer.offsetWidth;
        const parallaxOffsetY = (mouseY - parallaxCenterY) / parallaxContainer.offsetHeight;

        parallaxBackground.style.transform = `translate3d(${parallaxOffset * -20}px, ${parallaxOffsetY * -20}px, 0) scale(1.1)`;
    }
});