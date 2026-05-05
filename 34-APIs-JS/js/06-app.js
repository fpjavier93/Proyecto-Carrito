const microfone = document.querySelector('#microfono');
const salida = document.querySelector('#salida');

 microfone.addEventListener('click', ejecutarSpeechAPI);


 function ejecutarSpeechAPI() {
    //preguntar al usuario por acceso al microfono
    const SpeechRecognition  = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition ();

    recognition.start();

    recognition.onstart = function() { 
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...'
    };

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejo de grabar...'
        recognition.stop();
    };

    recognition.onresult = function(e) {
        console.log(e.results[0][0]);

        const {confidence, transcript} = e.results[0][0];
        const speech = document.createElement('p');
        speech.innerHTML = `Grabando: ${transcript}`;

        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)} %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
    }
 }