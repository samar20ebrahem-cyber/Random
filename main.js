const toggleSwitch = document.querySelector('#checkbox');
const themeText = document.querySelector('.theme-text');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeText.textContent = "Dark Mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeText.textContent = "Light Mode";
    };
};

toggleSwitch.addEventListener('click', switchTheme, false);