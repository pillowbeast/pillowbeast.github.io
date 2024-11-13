export function attachDarkModeToggle(toggleButton, toggleImage) {

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDarkMode = document.body.classList.contains('dark');

        toggleImage.src = isDarkMode ? "/src/assets/icons/moon.svg" : "/src/assets/icons/sun.svg";

        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });
}