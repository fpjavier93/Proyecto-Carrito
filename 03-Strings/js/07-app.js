const producto = 'Monitor de 20 Pulgadas';

const producto2 = "MONITOR GRANDE"
const productoEnMinusculas = producto2.toLowerCase();

console.log(productoEnMinusculas);

//Metodo .toUpperCase para poner todo en mayusculas
console.log(producto.toUpperCase());

//Metodo .toLowerCase para poner todo en minusculas
console.log(producto.toLowerCase());

const  precio = 3000;

//.toString() para convertir un numero a String
console.log(precio);
console.log(precio.toString().length);

console.log("*****************");

let esposa = 'Karla Simon Delgado';
let mayusculas = esposa.toLowerCase();
let minusculas = esposa.toUpperCase();
let nombreCortadoMayus = esposa.slice(0,5).toUpperCase();
let apellido = esposa.slice(6,20);

console.log(mayusculas);
console.log(minusculas);
console.log(nombreCortadoMayus);


console.log('**********************');
console.log('nombre: ' + nombreCortadoMayus);
console.log('apellido: ' + apellido);

console.log('**********************');

let numero = prompt('Inserte un numero');
let numeroConvertido = Number(numero);

console.log(numeroConvertido);
