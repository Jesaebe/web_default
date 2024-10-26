const elementHTML = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');

focoBt.addEventListener('click', () => {
    alterarContexto('foco');   
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');    
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');    
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