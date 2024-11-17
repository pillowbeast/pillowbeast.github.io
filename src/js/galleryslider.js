export function handleGalleries() {
    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach((gallery) => {

        const sliderImages = gallery.querySelector('.sliderimages');
        const imageWrappers = sliderImages.querySelectorAll('.image-wrapper');
        const computedStyle = window.getComputedStyle(sliderImages);
        const gap = parseInt(computedStyle.gap, 10);

        const positionIndicator = gallery.querySelector('.position-indicator');
        const circles = positionIndicator.querySelectorAll('.small-circle');

        let currentIndex = 1;

        function changeImageLook(index) {
            imageWrappers.forEach((element, idx) => {
                const image = element.querySelector('img');
                if (idx === index) {
                    image.classList.remove('faded');
                } else {
                    image.classList.add('faded');
                }
            });
        }

        function centerImage(index) {
            let offset = 0;
            
            for (let i = 0; i < index; i++) {
                const image = imageWrappers[i].querySelector('img');
                offset += image.offsetWidth + gap;
            }

            const containerWidth = sliderImages.offsetWidth;
            const currentImage = imageWrappers[index].querySelector('img');
            const currentImageWidth = currentImage.offsetWidth
            offset = (containerWidth / 2) - (currentImageWidth / 2) - offset;

            imageWrappers.forEach((element, idx) => {
                const image = element.querySelector('img');
                const initialWidth = image.offsetWidth;
                const scaleFactor = 0.8;
                const actualWidth = initialWidth*scaleFactor;

                let translateXValue = offset;

                if (idx === index) {
                    element.style.transform = `translateX(${offset}px)`;
                } else if (idx === index - 1 || idx === index + 1) {
                    const direction = (idx < index ? -1 : 1);

                    translateXValue += direction * (actualWidth/2 - initialWidth / 2);

                    element.style.transform = `translateX(${translateXValue}px)`;
                } else {
                    element.style.transform = `translateX(${offset}px)`;
                }
            });
        }

        function indicatePosition(index) {
            circles.forEach((circle, idx) => {
                if (idx === index) {
                    circle.classList.add('active');
                } else {
                    circle.classList.remove('active');
                }
            });
        }
        
        function slide(direction) {
            currentIndex = (currentIndex + direction + imageWrappers.length) % imageWrappers.length;
            changeImageLook(currentIndex);
            centerImage(currentIndex);
            indicatePosition(currentIndex);
        }

        function setIndex(index) {
            currentIndex = index;
            changeImageLook(currentIndex);
            centerImage(currentIndex);
            indicatePosition(currentIndex);
        }

        changeImageLook(currentIndex);
        centerImage(currentIndex);
        indicatePosition(currentIndex);

        gallery.querySelector('.prev-button').addEventListener('click', () => slide(-1));
        gallery.querySelector('.next-button').addEventListener('click', () => slide(1));
        
        circles.forEach((circle, idx) => {
            circle.addEventListener('click', () => setIndex(idx));
        });
    });
}
    