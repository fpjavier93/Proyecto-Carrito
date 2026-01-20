const mostrar = localStorage.getItem('nombre');
console.log(mostrar);

//obtener un objeto del localStorage y convertirlo a objeto

const objectJSON = JSON.parse(mostrar);
console.log(objectJSON);

const meses = localStorage.getItem('meses');
const mesesJSON = JSON.parse(meses);
console.log(mesesJSON);

console.log(mesesJSON[2]);