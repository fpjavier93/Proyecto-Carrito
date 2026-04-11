
import { ahorro, nombre, test, Cliente } from "./app.js";
 


console.log(ahorro); 
console.log(nombre); 
console.log( test(nombre,ahorro) );

const primero = new Cliente(nombre,ahorro);

console.log(primero)
console.log(primero.mostrarInfo())

