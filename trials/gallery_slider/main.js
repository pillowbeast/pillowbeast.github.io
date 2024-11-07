
document.addEventListener('DOMContentLoaded', () => {
    const sliderImages = document.getElementById('sliderimages');
    const imageWrappers = document.querySelectorAll('#sliderimages .image-wrapper');
    const computedStyle = window.getComputedStyle(sliderImages);
    const gap = parseInt(computedStyle.gap, 10);

    const positionIndicator = document.getElementById('position-indicator');
    const circles = positionIndicator.querySelectorAll('.small-circle');

    let currentIndex = 0;

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
        circles.forEach((element, idx) => {
            if (idx === index) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
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

    document.getElementById('prev-button').addEventListener('click', () => slide(-1));
    document.getElementById('next-button').addEventListener('click', () => slide(1));
    
    circles.forEach((element, idx) => {
        element.addEventListener('click', () => setIndex(idx));
    });
});