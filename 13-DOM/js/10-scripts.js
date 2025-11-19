//crear un elemento html document.createElement('') dentro del parentesis pones lo q 
//quieres createRef, dic, jpg, img, etc

const enlace = document.createElement('A');

//agregandole el texto
enlace.textContent = 'Nuevo Enlace';

//añadiendo href
enlace.href = '/nuevo-enlace'
enlace.target = "_blank"

enlace.setAttribute('data-enlace', 'nuevo-enlace')
enlace.classList.add('alguna-clase')

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//añadirle nuevo enlace a la navegacion
//navegacion.appendChild(enlace); //appenChild lo coloca al final


console.log(navegacion.children);
navegacion.insertBefore(enlace,navegacion.children[0])

enlace.onclick = miFuncion;

function miFuncion() {
    alert('diste click')
}

//console.log(enlace);


//crear CARD

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('P');

console.log(parrafo1);
console.log(parrafo2);