//variables
const formulario = document.querySelector('#formulario');
const listaTwits = document.querySelector('#lista-tweets');
const InputTweet = document.querySelector('#tweet');
const button = document.querySelector('.button');
const contenido = document.querySelector('#contenido');
let tweet = [];




//----Event Listeners-----
evenListener();

document.addEventListener('DOMContentLoaded', () => {
    //si no hay nada en el localStroage daria null, entonces salta a la otra condicion y devuelve
    //un array vacio
    const dataLocal = JSON.parse(localStorage.getItem('tweet')) || [];
    tweet = dataLocal;

    mostratTweet();
});
//clearLocalStorage();

//funciones
function clearLocalStorage() {
    localStorage.clear();
};

function evenListener() {
    formulario.addEventListener('submit', addTweet);
    ;
}

function addTweet(e) {
    //validacion
    if (InputTweet.value.trim() === "") {
        e.preventDefault();
        smsError();
        return;
    }
    e.preventDefault();
    const tweetObject = {
        id: Date.now(),
        texto: InputTweet.value,
    };
    tweet.push(tweetObject);
    localStorage.setItem('tweet', JSON.stringify(tweet));
    mostratTweet();
    formulario.reset();
    //O puede ser...
    //InputTweet.value = '';
};

function smsError() {
    const smsError = document.createElement('p');
    smsError.textContent = "Campo Vacio";
    //añadiendo estilo css al mensaje de error...
    smsError.classList.add('error');

    contenido.appendChild(smsError);

    setTimeout(() => {
        smsError.remove()
    }, 2000);
};

function cleanHTML() {
    while (listaTwits.firstChild) {
        listaTwits.removeChild((listaTwits.firstChild))
    }
};

function mostratTweet() {
    //borrar listado de tweet en la pagina HTML
    cleanHTML();

    tweet.forEach((objTweet) => {
        //creando boton de eliminar;
        const btnEliminar = document.createElement('a');
        btnEliminar.classList.add('borrar-tweet');
        btnEliminar.innerText = 'X';
        btnEliminar.onclick = () => {
            borrarTweet(objTweet.id);
            localStorage.setItem('tweet',JSON.stringify(tweet));
            mostratTweet();
        };

        const list = document.createElement('li');
        list.textContent = objTweet.texto;
        listaTwits.appendChild(btnEliminar);
        listaTwits.appendChild(list);
        //localStorage.setItem('tweet', stringify(tweet));
    })
};

function borrarTweet(idData) {
    tweet = tweet.filter(obj => obj.id !== idData);

};





