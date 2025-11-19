const carrito = [];

//Definir producto

const producto = {
   nombre: 'Monitor de 32 pulgadas',
   precio: 400
}

const producto2 = {
   nombre: 'CElular',
   precio: 800
}

const producto3 = {
   nombre: 'Teclado',
   precio: 100
}

let resultado; //decalarar variable resultado
//Agregar al carrito 

resultado = [...carrito, producto];  //agregar producto al carrito
//resultado = carrito.concat(producto); //agregar producto al carrito

resultado = [...resultado, producto2]; //agregar producto al carrito

//para que se copie al inicio de array
resultado = [producto3, ...resultado];


console.table(resultado);

console.log('*************************');

//Ejemplo de carrito de compras
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

let listaDeCompras; //declarar variable listaDeCompras
//Agregar al carrito

listaDeCompras = [...carrito2,item1]; //agregar item1 al carrito

listaDeCompras = [...listaDeCompras,item2];

listaDeCompras = [...listaDeCompras, item3]; //agregar item3 al carrito

console.log(listaDeCompras); //imprimir carrito

console.log('*************************');

listaDeCompras = [...carrito2,item3];
console.log(listaDeCompras); //imprimir carrito