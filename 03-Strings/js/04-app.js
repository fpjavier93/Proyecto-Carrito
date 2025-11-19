//Metodos para eliminar el espacio en blanco al inicio y al final de una cadena de textos

const producto = '           Monitor de 20 Pulgadas        ';

console.log(producto);
console.log(producto.length);



//Eliminar del inicio...
// console.log(producto.trimStart());
//Eliminar el final...
// console.log(producto.trimEnd());
//Esto sirve para cuando los usuarios escriben algun formulario y dejan espacios, puedes quitarles el espacio para q se guarde sin los espacios.

// console.log(producto.trimStart().trimEnd());


// let nombre = prompt("Escribe tu nombre");

// console.log(nombre);
// console.log(nombre.trimStart().trimEnd());

//Elimina directamente ambas direcciones de espacios en blanco
// console.log(nombre.trim());

const apellido = prompt('Inserte su apellido');


console.log(apellido.trim());
console.log(apellido.length);  // Aun cuando se eliminen los espacios en blanco, el .length sigue contando los caracteres en blanco


  console.log(apellido.trimStart());
console.log(apellido.length);