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

    const element = document.getElementById('jump-to-here');
    if (element) {
        const positionY = element.getBoundingClientRect().top + window.scrollY;
        const maxScrollPosition = document.body.scrollHeight - window.innerHeight;
        
        moveDownButton.addEventListener('click', () => {
            if (positionY > maxScrollPosition) {
                window.scrollTo({
                    top: maxScrollPosition,
                    behavior: 'smooth'
                });
            } else {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        });
        moveDownButton.classList.remove('not-visible');
    } else if (moveDownButton) {
        moveDownButton.classList.add('not-visible');
    }
        
    window.addEventListener('scroll', toggleMoveUpButton);
}