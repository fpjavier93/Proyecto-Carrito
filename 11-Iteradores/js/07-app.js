const pendientes = ["tarea", "comer", "proyecto", "estudiar"];

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Monitor 32 pulgadas', precio: 700},
    {nombre: 'Mouse', precio: 30, descuento: true},
    {nombre: 'teclado', precio: 40},
    {nombre: 'Torre', precio: 100},
    {nombre: 'ram', precio: 120}
  ];

 for (const pendiente of carrito) {
    if (pendiente.nombre == "Mouse"){
        console.log(pendiente.nombre);
    }
 }


 for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].nombre == "Mouse") {
    console.log(carrito[i].nombre);
  }
 }