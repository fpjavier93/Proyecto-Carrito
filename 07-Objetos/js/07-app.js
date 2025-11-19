"use strict";
//dentro de los objetos una vriable const se puede reasignar
let producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    otros: {
        disponibilidad: true,
        voltaje: "220 V"
    }

}

producto.precio = 200;
delete producto.disponible;

producto.color = "blanco"; // agragando una propiedad al objeto
producto.otros.asistencia = "correcta"; // agragando una propiedad al objeto anidado

console.log(producto);
 