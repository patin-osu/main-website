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

const soundFile = new Audio('zenith.mp3');

const initvol = 0.5; // Set the initial volume between 0 and 1

document.addEventListener('click', (event) => {
    if (event.target === document.body) {
        // Play the sound when clicking anywhere on the document body
        soundFile.play();
    }
});

document.addEventListener('mousewheel', (event) => {
    const delta = event.deltaY / 120; // Calculate the scroll wheel delta

    let newVolume = initvol + delta;
    newVolume = Math.max(0, Math.min(1, newVolume)); // Clamp the volume between 0 and 1

    soundFile.volume = newVolume;
});