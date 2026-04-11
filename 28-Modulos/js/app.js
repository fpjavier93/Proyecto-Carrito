

// //esto sirve para que todo lo q este dentro de esta funcion principal este local en este archivo app
// (function () {
//     console.log('Desde un IIFE')

// // esta funcion no va a ser usada en otro archivo xq esta dentro de un IIFE
// const nombre = 'Javier';

// //asi se hace para asignar la variable a nivel global
// window.nombre = 'Javier';

// })();

//exporta variables
export const ahorro = 50;

export const nombre = 'Karla';

console.log(nombre);

//exportar funciones
export function test(nombre,ahorro) {
    return `Mi nombre es ${nombre} y tengo guardado ${ahorro} pesos`;
}

//exportando Clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInfo(){
        return this.nombre
    }
}

//export default
//no puede haber mas de 1 export default
export default function nuevaFuncion(){
    console.log('Hola desde export default');
}