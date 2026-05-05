const fullScreenButton = document.querySelector('#abrir-pantalla-completa');
const exitFullScreenButton = document.querySelector('#salir-pantalla-completa');
const buttonNotificame = document.querySelector('#notificar');


fullScreenButton.addEventListener('click', FullScreen);
exitFullScreenButton.addEventListener('click', exitFullScreen);

function FullScreen() {
     
    document.documentElement.requestFullscreen();
};


function exitFullScreen() {
  
    document.exitFullscreen();
};