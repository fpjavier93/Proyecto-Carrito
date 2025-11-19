//  const carrito = [];

//  const producto = {
//     nombre: 'Monitor de 32 pulgadas',
//     precio: 400
//  }

//  const producto2 = {
//     nombre: 'Celular',
//     precio: 800
//  }

//  const producto3 = {
//     nombre: 'Teclado',
//     precio: 100
//  }

//  const producto4 = {
//     nombre: 'Mouse',
//     precio: 50
//  }

//  carrito.push(producto);
//  carrito.push(producto2);
//  carrito.push(producto3);
//  carrito.push(producto4);
 

 

//  console.table(carrito);

//  //Eliminar ultimo elemento de un array
// carrito.pop();

// console.table(carrito);

//  //Eliminar al inicio del array
// carrito.shift();

// //Eliminar una posicion especifica del array
// // carrito.splice(0,3); //aqui elimina desde la posicion 0 a la 2
// // //para eliminar solo un elemento
// carrito.splice(2,1); //elimina solo el elemento 2



// console.table(carrito);

// console.log('*************************');

const carrito2 = [];

const item1 = {
    nombre: 'Ventilador',
    precio: 50,
    color: 'blanco',
}
const item2 = {
    nombre: 'lavadora',
    precio: 500,
    color: 'blanco',
}
const item3 = {
    nombre: 'secadora',
    precio: 600,
    color: 'rojo',
}
const item4 = {
    nombre: 'televisor',
    precio: 600,
    color: 'rojo',
}

carrito2.push(item1);
carrito2.push(item2);
carrito2.push(item3);
carrito2.push(item4);
console.table(carrito2);


carrito2.pop();

console.table(carrito2);