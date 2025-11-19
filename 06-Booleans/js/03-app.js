//BUENAS PRACTICAS

const autenticado = false;

//no es necesario poner  q autenticado == true, ya esta  implicito
console.log(autenticado ?"Puedes ver TV" :"No puedes ver TV")

//Operador Ternario

console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');


console.log("*******************");

let interruptor = true;

console.log(interruptor ? "Encendido".toUpperCase(): "Apagado")



console.log('********************');
let condicion = !autenticado ? 'Si esta autenticado' : 'No esta autenticado';

console.log(condicion);