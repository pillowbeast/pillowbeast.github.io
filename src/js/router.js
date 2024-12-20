import { handleGalleries } from './galleryslider.js';
import { handleMoveButtons } from './moveButtons.js';
import { handleOverlay } from './overlay.js';
import { closeMenuUponNav, markActiveMenu } from './menu.js';

export function setupRouting() {
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener('click', handleLinkClick);
        }
    });

    window.addEventListener('popstate', loadMainContent);
    applyDarkMode();
}

async function handleLinkClick(event) {
    event.preventDefault();
    const url = event.currentTarget.href;

    await loadMainContent(url);
    window.history.pushState({}, '', url);
    markActiveMenu();
}

async function loadMainContent(url = window.location.href) {
    try {
        const response = await fetch(url);
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newMainContent = doc.querySelector('main').innerHTML;

        document.querySelector('main').innerHTML = newMainContent;

        applyDarkMode();
        handleMoveButtons();
        handleGalleries();
        handleOverlay();
        closeMenuUponNav();
    } catch (error) {
        console.error('Failed to load content:', error);
    }
}

function applyDarkMode() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
    }
}
