
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Monitor 32 pulgadas', precio: 700},
    {nombre: 'Mouse', precio: 30},
    {nombre: 'teclado', precio: 40},
    {nombre: 'Torre', precio: 100},
    {nombre: 'ram', precio: 120}
  ];


console.log('*************************');

//metodo for each
carrito.forEach(  producto => {
    console.log(`el ${producto.nombre}, tiene un precio de ${producto.precio}`)
}

)


//metodo .map
//crea un arreglo nuevo

const nuevoArreglo = carrito.map((producto) => {
    return `el ${producto.nombre}, tiene un precio de ${producto.precio}`;
}
)

console.log(nuevoArreglo);