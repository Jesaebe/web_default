export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    console.log(validaIdade(dataNascimento));    
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity("Usuário não é maior de 18 anos");
    }
}

function validaIdade(data) {
    const hoje = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    return hoje >= dataMais18;    
}