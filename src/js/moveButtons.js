export function handleMoveButtons() {
    const moveUpButton = document.querySelector('#move-up-button');
    const moveDownButton = document.querySelector('#move-down-button');
    const windowHeight = window.innerHeight;
    
    moveUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    function toggleMoveUpButton() {
        if  (window.scrollY > windowHeight) {
            moveUpButton.classList.remove('not-visible');
        } else {
            moveUpButton.classList.add('not-visible');
        }
    }

    window.addEventListener('scroll', toggleMoveUpButton);


    const element = document.getElementById('jump-to-here');
    if (element) {
        moveDownButton.addEventListener('click', () => {
            element.scrollIntoView({ behavior: 'smooth' });
        });
        moveDownButton.classList.remove('not-visible');

        function toggleMoveDownButton() {
            const rect = element.getBoundingClientRect();
            const inView = rect.bottom <= window.innerHeight;
            if  (inView) {
                moveDownButton.classList.add('not-visible');
            } else {
                moveDownButton.classList.remove('not-visible');
            }
        }
        window.addEventListener('scroll', toggleMoveDownButton);
    } else if (moveDownButton) {
        moveDownButton.classList.add('not-visible');
    }   
}