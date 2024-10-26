const elementHTML = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const botoes = document.querySelector('.app__card-button');

const startPauseBt = document.querySelector('#start-pause');
const nomeStartButton = document.querySelector('#start-pause span');
const imgStartButton = document.querySelector('#start-pause img'); 
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');

const tempoNaTela = document.querySelector('#timer');

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

let tempoDecorridoEmSegundos = 1500;
let interval = null;
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    parar();
    tempoDecorridoEmSegundos = 1500;
    mostrarTempo();
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');    
    parar();
    tempoDecorridoEmSegundos = 300;
    mostrarTempo();
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    parar();
    tempoDecorridoEmSegundos = 600;
    mostrarTempo();
})

function alterarContexto(contexto) {
    elementHTML.setAttribute('data-contexto',contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    focoBt.classList.remove('active');
    curtoBt.classList.remove('active');
    longoBt.classList.remove('active');
    
    if (contexto == 'foco') {
        focoBt.classList.add('active');
        title.innerHTML = `Otimize sua produtividade, <br><strong class="app__title-strong">mergulhe no que importa.</strong>`;
    } 

    if (contexto == 'descanso-curto') {
        curtoBt.classList.add('active');
        title.innerHTML = `Que tal da uma respirada, <br><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
    }

    if (contexto == 'descanso-longo') {
        longoBt.classList.add('active');
        title.innerHTML = `Hora de voltar a superfície, <br><strong class="app__title-strong">Faça uma pausa longa!</strong>`;
    }
}

function tocaMusicaButton(music) {
    let audioButton = new Audio(music);
    audioButton.play();
}

function parar() {
    imgStartButton.setAttribute('src','imagens/play_arrow.png')
    nomeStartButton.textContent = 'Começar';    
    tocaMusicaButton('sons/pause.mp3');
    clearInterval(interval);
    interval = null;
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos == 0) {
        tocaMusicaButton('sons/beep.mp3');
        parar();
        mostrarTempo();
        return;
    }
    tempoDecorridoEmSegundos--;
    mostrarTempo();
}

function iniciarPause() {
    if (interval) {        
        parar();
        return;
    }
    imgStartButton.setAttribute('src','imagens/pause.png')
    nomeStartButton.textContent = 'Pausar';
    tocaMusicaButton('sons/play.wav');
    interval = setInterval(contagemRegressiva, 1000);
}

startPauseBt.addEventListener('click', iniciarPause);

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: "2-digit"});
    tempoNaTela.innerHTML = tempoFormatado;
}

mostrarTempo();