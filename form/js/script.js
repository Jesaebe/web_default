import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposFormulario = document.querySelectorAll('[required]');

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => {
        verificaCampo(campo);
    })
})

function verificaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }
}
