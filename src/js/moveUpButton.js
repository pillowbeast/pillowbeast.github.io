export function handleMoveUpButton() {
    const moveUpButton = document.querySelector('#move-up-button');
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
}