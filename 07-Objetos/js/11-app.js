"use strict";

let color = 'verde';

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 3000,
    disponible: true,
    color: 'rojo',
    mostrarInfo: function () {
        console.log(`El producto ${this.color} tiene un precio de: ${this.precio}`) //this hace que se tome el valor que existe en el mismo objero, color = rojo.
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 30000,
    disponible: true,
    producto: {
        nombre: "Monitor de 20 pulgadas",
        precio: 300,
        disponible: true,
        color: 'azul',
            },
    mostrarInfo: function () {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.producto.precio}`)
    }
}
producto.mostrarInfo();
producto2.mostrarInfo();

console.log(`EL producto ${producto.nombre} tiene un precio de `);

