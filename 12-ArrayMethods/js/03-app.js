const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let sumaTotal = 0;
const reducido = carrito.reduce((pvalue, cvalue) => {
    if (!pvalue.prdoucto) {
        pvalue.prdoucto = "Varidado",
        pvalue.precio = 0;
    }
pvalue.precio += cvalue.precio
return pvalue

}, {})

console.log(reducido);