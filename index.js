window.addEventListener('load', function () {
    setTimeout(function () {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('fade-out');
    }, 100);
});