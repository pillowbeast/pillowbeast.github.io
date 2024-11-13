export function handleOverlay() {

    function makeFullscreen() {
        const main = document.querySelector('main');
        main.querySelectorAll('img').forEach(image => {
            if (image.classList.contains("no-overlay")){
            } else {
                image.addEventListener('click', () => {
                    const overlay = document.getElementById('image-overlay');
                    const overlayImage = document.getElementById('overlay-image');
                    overlayImage.src = image.src;
                    overlay.style.display = 'flex';
                });
            }
        });
    }

    function closeOverlay() {
        const overlay = document.getElementById('image-overlay');
        overlay.style.display = 'none';
    }

    document.getElementById('image-overlay').addEventListener('click', closeOverlay);

    makeFullscreen();
}


