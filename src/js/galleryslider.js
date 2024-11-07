export function attachGallerySliderButtons() {
    const sliders = document.querySelectorAll('.gallery-slider');

    sliders.forEach(element => {
        const sliderImages = element.querySelector('.slider-images');
        const images = sliderImages.getElementsByTagName('img');
        const prevButton = element.querySelector('.prev-button');
        const nextButton = element.querySelector('.next-button');

        let currentIndex = 0;

        function showSlide(index) {
            if (index < 0) {
                currentIndex = images.length - 1;
            } else if (index >= images.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            const offset = -currentIndex * 100;
            sliderImages.style.transform = `translateX(${offset}%)`;
        }

        prevButton.addEventListener('click', () => {
            showSlide(currentIndex - 1);
        });
        nextButton.addEventListener('click', () => {
            showSlide(currentIndex + 1);
        });
    });
}