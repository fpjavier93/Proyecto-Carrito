const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
        console.log(`Estamos en la posicion ${i}`)
        continue
    }
  console.log (i)

}

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Monitor 32 pulgadas', precio: 700},
    {nombre: 'Mouse', precio: 30, descuento: true},
    {nombre: 'teclado', precio: 40},
    {nombre: 'Torre', precio: 100},
    {nombre: 'ram', precio: 120}
  ];

  console.log(carrito);

  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`Tiene descuento el ${carrito[i].nombre}`)
    }
    console.log(carrito[i].nombre)
  }