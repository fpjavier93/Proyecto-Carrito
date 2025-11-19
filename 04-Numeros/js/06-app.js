//Convertir String a numero

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt(numero1));

console.log(Number.parseFloat(numero2)); //para convertir texto a numero de fraccion

//No se puede convertir
console.log(Number.parseInt(numero3));

//Revisar si el numero es entero
console.log(Number.isInteger(numero4));

console.log("*****************");

let puntaje = 5;
let puntajeAUmentado = ++puntaje;


console.log(puntaje);
console.log(puntajeAUmentado);



console.log("*****************");
console.log("*****************");

// let numero5 = prompt('Ingresa numero');

// numero5 = Number.parseInt(numero5);//Estoy convirtiendo texto a numero
// console.log(numero5);

if (Number.isInteger(numero4)) {
    console.log("Es un numero entero");
} else {
 console.log("No es un numero entero");
}


let num1 = prompt('Ingresa numero');
let num2 = prompt('Ingresa numero');

let resultado = num1 + num2;

num1 = Number.parseInt(num1);
num2 = Number.parseInt(num2);



console.log(resultado);