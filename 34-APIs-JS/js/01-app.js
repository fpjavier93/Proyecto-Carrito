const buttonNotificame = document.querySelector('#notificar');
const buttonVerNotificacion = document.querySelector('#verNotificacion');

buttonNotificame.addEventListener('click', () => {
    //usando la API nativa de Notificacion
    Notification.requestPermission()
        .then(resultado => {
            console.log('El resultado es', resultado);
        })
});

buttonVerNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/populares2.jpg',
            body: 'Aprendiendo a programar',
        });
        notificacion.onclick = function () {
            window.open('https://www.youtube.com/')
        }

    }
});

