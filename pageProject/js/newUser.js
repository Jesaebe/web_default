
import * as css from "./script.js"

const mandatoryFields = document.querySelectorAll('[required]');
const createUserButton = document.getElementById('create-user-button');

createUserButton.addEventListener('click', (event) => {
    event.preventDefault();

    let isValid = true;

    mandatoryFields.forEach((field) => {
        validadField(field);
        if (!field.validity.valid) {
            isValid = false;
        }        
    })

    if (isValid) {

        const replay = {
            'name': document.querySelector('#name').value,
            'birthday': document.querySelector('#birthday').value,
            'email': document.querySelector('#email').value,
            'password': document.querySelector('#password').value,
        }
        localStorage.setItem('newUser', JSON.stringify(replay));
        window.location.href = "./login.html";

    }
})

mandatoryFields.forEach((field) => {
    field.addEventListener('blur', () => {
        validadField(field);        
    });

    field.addEventListener('invalid', (ev) => {
        ev.preventDefault()
    });
})

function validadField(field) {
    let message = '';
    field.setCustomValidity('');
    
    const errorMessage = field.parentNode.querySelector('.error-message')
    
    if (field.name == 'name' && field.value.length != "") {
        minCharacterName(field);
    }

    if (field.name == 'passwordValid') {
        validadPasswordEquals(field);
    }

    errorTypes.forEach(erro => {
        if (field.validity[erro]) {
            message = messages[field.name][erro];
        }

        if (field.validity.customError){
            message = field.validationMessage;
        } 
    })

    if (!field.checkValidity()) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    }
}

function minCharacterName(field) {
    if (field.value.length < 3) {
        field.setCustomValidity('Seu nome tem menos de 3 letras');
    }
}

function validadPasswordEquals(field) {
    const password = document.querySelector('#password');
    if (field.value != password.value) {
        field.setCustomValidity('Senha informadas são diferentes');
    }
}

const errorTypes = [
    'valueMissing',
    'typeMismatch',
]

const messages = {
    name: {
        valueMissing: 'Você deve preencher seu nome',
    },
    email: {
        valueMissing: 'Você deve um e-mail válido',
        typeMismatch: 'E-mail informado é inválidp '       
    },
    password: {
        valueMissing: 'Você deve preencher sua senha'
    },
    passwordValid: {
        valueMissing: 'Você deve preencher sua senha'
    },
}
