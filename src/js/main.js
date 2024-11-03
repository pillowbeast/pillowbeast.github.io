import { toggleMenu } from './menu.js';
import { toggleDarkMode } from './darkMode.js';

// Function to load HTML templates
function loadTemplate(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback();
        });
    }

document.addEventListener('DOMContentLoaded', () => {
    loadTemplate('header', '../src/components/header.html', toggleMenu)
    loadTemplate('footer', '../src/components/footer.html');

    // toggleDarkMode();
});