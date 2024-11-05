import { toggleMenu } from './menu.js';
import { attachDarkModeToggle } from './darkMode.js';

function loadTemplate(id, file) {
    return fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}


function loadTemplates() {
    return Promise.all([
        loadTemplate('header', '../src/components/header.html'),
        loadTemplate('footer', '../src/components/footer.html')
    ]);
}



document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
    }

    loadTemplates().then(() => {
        attachToggles();
    });
});

function attachToggles() {
    const toggleButton = document.querySelector('.dark-mode-toggle');
    const toggleImage = document.getElementById('dark-mode-toggle-img');

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        toggleImage.src = "/src/assets/icons/moon-solid.svg";
    } else {
        toggleImage.src = "/src/assets/icons/sun-solid.svg";
    }

    toggleMenu();
    attachDarkModeToggle(toggleButton, toggleImage);
}