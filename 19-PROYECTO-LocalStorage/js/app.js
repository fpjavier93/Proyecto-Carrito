//variables
const formulario = document.querySelector('#formulario');
const listaTwits = document.querySelector('#lista-tweets');
const InputTweet = document.querySelector('#tweet');
const button = document.querySelector('.button');
let tweet = [];



//----Event Listeners-----
evenListener();
document.addEventListener('DOMContentLoaded', () => {
    //si no hay nada en el localStroage daria null, entonces salta a la otra condicion y devuelve
    //un array vacio
    const dataLocal = JSON.parse(localStorage.getItem('tweet')) || [];
    tweet = dataLocal;

    tweet.forEach((t) => {
        const text = document.createElement('P');
        text.textContent = t;
        listaTwits.appendChild(text);
    })




})
//clearLocalStorage();

//funciones
function clearLocalStorage() {
    localStorage.clear();
}

function evenListener() {
    formulario.addEventListener('submit', addTweet);
}
function addTweet(e) {
    e.preventDefault();
    tweet.push(InputTweet.value.trim());
    localStorage.setItem('tweet', JSON.stringify(tweet));
    //if(!(tweet = []))localStorage.getItem(JSON.parse('tweet'));
    mostratTweet();
    InputTweet.value = '';

};

function mostratTweet() {
    //borrar listado de tweet en la pagina HTML
    listaTwits.innerHTML = "";

    tweet.forEach((text) => {
        const p = document.createElement('P');
        p.textContent = text;
        listaTwits.appendChild(p);
    })
}




