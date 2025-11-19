const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const enero = carrito.some((producto)=> producto.nombre == "Televisión")

console.log(enero)

if (enero) {
    console.log("Existe");
}

else {
    console.log("no existe")
}



const existe = meses.some((mes)=> mes === "Abril")


console.log(existe)