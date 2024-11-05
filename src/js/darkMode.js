export function attachDarkModeToggle(toggleButton, toggleImage) {

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDarkMode = document.body.classList.contains('dark');

        toggleImage.src = isDarkMode ? "/src/assets/icons/moon-solid.svg" : "/src/assets/icons/sun-solid.svg";

        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    });

}