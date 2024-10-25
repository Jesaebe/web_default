function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    if (elemento.localName == 'audio' && (elemento != null || elemnto != undefined)) {
        console.log("Tocou");   
        elemento.play();
    } else {
        alert("Elemento não encontrado!");
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

listaTeclas.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function() { 
        tocaSom(idAudio); 
    }
    
    tecla.onkeydown = function(event) {
        console.log(event);        
        if (event.keyCode === 32 || event.keyCode === 13) {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
})

