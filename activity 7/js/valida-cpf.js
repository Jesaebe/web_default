export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g,"");
    console.log(cpf);
    console.log("Repetido: ", validaNumerosRepetidos(cpf));
    console.log("Válido: ", validaPrimeiroDigitoCpf(cpf) && validaSegundoDigitoCpf(cpf));
    
    if (!validaNumerosRepetidos(cpf) &&
        validaPrimeiroDigitoCpf(cpf) &&
        validaSegundoDigitoCpf(cpf)
    ) {
        console.log(`CPF Válido: ${cpf}`);        
    } else {
        campo.setCustomValidity("CPF Inválido ou Inexistente");
        console.log(`CPF Inválido: ${cpf}`);
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf); 
}

function validaPrimeiroDigitoCpf(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma == cpf[9];
}

function validaSegundoDigitoCpf(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma == cpf[10];
}