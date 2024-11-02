tailwind.config = {
    theme: {
        extend: {
            colors: {
                blue: {
                    light: '#A748EE',
                    dark: '#723EBE',
                    hover: '#CE42FB'
                }
            },
            fontFamily: {
                play: ['Playwrite GB S', 'sans-serif']
            },
        }
    }
}



const darkModeButton = document.getElementById('darkMode');
const sectionLogin = document.getElementById('sectionLogin');
var theme = 'lightMode';

darkModeButton.addEventListener('click', () => {
    if (theme == 'darkMode') {
        lightMode()
    } else {
        darkMode();
    }
})


function lightMode() {
    sectionLogin.classList.remove('bg-gray-900');
    sectionLogin.classList.add('bg-white');
    darkModeButton.value = 'DarkMode';
    theme = 'lightMode';
}

function darkMode() {
    sectionLogin.classList.add('bg-gray-900');
    sectionLogin.classList.remove('bg-white');
    darkModeButton.value = 'LightMode';
    theme = 'darkMode';
}
