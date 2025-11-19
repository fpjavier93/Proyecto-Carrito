//sellar un objeto
"use strict";
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

//seal no permite agregar ni eliminar, pero SI PERMITE MODIFICAR LAS EXISTENTES
Object.seal(producto);

producto.disponible = false; //si se puede
// prdoducto.imagen = "imagen.jpg" //no se puede


console.log(producto);

console.log('*****************************');
//para saber si u nobjeto esta sellado
console.log(Object.isSealed(producto));