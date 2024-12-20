import { toggleMenu, closeMenuUponNav } from './menu.js';
import { attachDarkModeToggle } from './darkMode.js';
import { setupRouting } from './router.js';
import { handleGalleries } from './galleryslider.js';
import { handleMoveButtons } from './moveButtons.js';
import { handleOverlay } from './overlay.js';

function loadTemplate(id, file) {
    return fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

function loadTemplates() {
    return Promise.all([
        loadTemplate('header', '/src/components/header.html'),
        loadTemplate('footer', '/src/components/footer.html')
    ]);
}

function removePreloader() {
    const preloader = document.getElementById('preloader');
    const wrapper = document.getElementById('wrapper');

    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.remove();
        wrapper.classList.remove('hidden');
        wrapper.classList.add('shown');
    }, 500);
}

function attachToggles() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const toggleImage = document.getElementById('dark-mode-toggle-img');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        toggleImage.src = "/src/assets/icons/moon.svg";
    } else {
        toggleImage.src = "/src/assets/icons/sun.svg";
    }

    toggleMenu();
    attachDarkModeToggle(toggleButton, toggleImage);
}


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
    }
    loadTemplates().then(() => {
        closeMenuUponNav();
        attachToggles();
        handleMoveButtons();
        handleGalleries();
        handleOverlay();
        setupRouting();
        removePreloader();
    });
});
