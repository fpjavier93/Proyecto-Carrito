
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Monitor 32 pulgadas', precio: 700},
    {nombre: 'Mouse', precio: 30},
    {nombre: 'teclado', precio: 40},
    {nombre: 'Torre', precio: 100},
    {nombre: 'ram', precio: 120}
  ];


for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre); // i esta dando la posicion del array
};

console.log('*************************');

//metodo for each
carrito.forEach( function (producto) {
    console.log(`el ${producto.nombre}, tiene un precio de ${producto.precio}`)
}

)