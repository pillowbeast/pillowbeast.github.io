export function toggleMenu() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('rotated');
        nav.classList.toggle('mobile-nav');
    });

}

export function closeMenuUponNav() {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelectorAll('a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('mobile-nav');
            menuButton.classList.remove('rotated');
        });
    });
}

export function markActiveMenu() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav a'); // Adjust the selector if needed

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}