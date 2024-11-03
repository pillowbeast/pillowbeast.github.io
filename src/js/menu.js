export function toggleMenu() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('rotated');
        nav.classList.toggle('mobile-nav');
    });
}