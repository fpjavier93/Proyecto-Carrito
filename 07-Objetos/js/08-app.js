//prevenir que se pueda modificar una variable const dentro de un objeto
"use strict"; //habilita el modo estricto para exigir que se cumplan ciertas reglas
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


//ya no me va a permitir modificar las propiedades
Object.freeze(producto);

//producto.disponible = false;
//prdoducto.imagen = "imagen.jpg"


//para saber si un nobjeto esta congelado
console.log(Object.isFrozen(producto));



console.log(producto);




// //el modo estricto no me permite la cracion de la variable xq no tiene ni let ni const
// x = 20;
//  console.log(x);

//aqui si
//  let y = 30;
//  console.log(y);
