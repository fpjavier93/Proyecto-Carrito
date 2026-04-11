// =====================
// Symbols
// =====================
const sym = Symbol('1');
const sym2 = Symbol('1');

//cada symbols son diferentes

if (sym === sym2) {
    console.log('son iguales')
} else{
    console.log('son diferentes')
}

console.log( Symbol() === Symbol());

//Agregar nombre y apllido como llaves de objeto

const nombre = Symbol();
const apellido = Symbol();
const persona = {};  

//hay q agregarlas en el objeto con [...] corchetes
persona[nombre] = 'Javier';
persona[apellido] = 'Fonseca Perez';
persona.cuenta = 'Premium';
persona.edad = 32;

console.log(persona);

//para mostrar el contenido del objeto hecho con symbol tambien tiene q ser con [...];
console.log(persona[nombre]);
console.log(persona[apellido]);
console.log(persona.cuenta);


console.log('*********************************')
//las propiedades que utilizan los symbols no son iterables 
for (i in persona){
    console.log(i)
}

console.log('*********************************')
//Definir una descripcion del sumbols

const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Javier';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);