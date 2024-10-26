import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposFormulario = document.querySelectorAll('[required]');
const formulario = document.querySelector('[data-formulario]');

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => {
        verificaCampo(campo);
    });
    
    // campo.addEventListener('keydown', () => {
    //     campo.value = maskCPF(cpf);
    // });
    
    campo.addEventListener('invalid', (evento) => {
        evento.preventDefault()
    });


})

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
        
    }

    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }

    tiposErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }

        if (campo.validity.customError){
            mensagem = campo.validationMessage;
        } 
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();
    console.log(campo);
    
    if (!validadorInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}

function maskCPF(cpf) {
    cpf = cpf.value.replace(/\D/g, '');
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");    
    return cpf;
}

const tiposErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooshort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um nome válido.',
        tooShort: 'Por favor, preencha um nome válido.'
    },
    email: {
        valueMissing: 'O campo de e-mail não pode estar vazio.',
        typeMismatch: 'Por favor, preencha um email válido.',
        tooShort: 'Por favor, preencha um e-mail válido.'
    },
    rg: {
        valueMissing: 'O campo de RG não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um RG válido.',
        tooShort: 'O campo de RG não tem caractéres suficientes.'
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: 'Por favor, preencha um CPF válido.',
        customError: 'O CPF digitado não existe.',
        tooShort: 'O campo de CPF não tem caractéres suficientes.' 
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    }, 
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.'
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const listaRespostas = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'rg': e.target.elements['rg'].value,
        'cpf': e.target.elements['cpf'].value,
        'aniversario': e.target.elements['aniversario'].value,
    }
})


