const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviarFoto = document.querySelector('[data-enviar]');

let imagemURL = "";

botaoIniciarCamera.addEventListener('click', async function () {
    /********* CODIGO PARA USO DA CAMERA *********
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    video.srcObject = iniciarVideo; 
    ************************************/
    botaoIniciarCamera.style.display = 'none';
    campoCamera.style.display = 'block';
});

botaoTirarFoto.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imagemURL = canvas.toDataURL('image/jpeg');
    campoCamera.style.display = 'none';
    botaoIniciarCamera.style.display = 'block';
    mensagem.style.display = 'block';
    canvas.style.display = 'none';

    botaoIniciarCamera.setAttribute('src','../../activity 3/assets/jesaebe.jpg')
    botaoIniciarCamera.style.width = '180px';
    botaoIniciarCamera.style.height = '229px';
});

botaoEnviarFoto.addEventListener('click', () => {
    const receberDadosExistentes = localStorage.getItem('cadastro');
    const converterRetorno = JSON.parse(receberDadosExistentes);
    //converterRetorno.imagem = imagemURL; // DESCOMENTAR SE TIVER CAPTURADO DA CAMERA
    converterRetorno.imagem = '../../activity 3/assets/jesaebe.jpg';
    localStorage.setItem('cadastro', JSON.stringify(converterRetorno));
    window.location.href = "./abrir-conta-form-3.html";

})