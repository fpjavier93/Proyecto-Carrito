"use strict";

const productos = [
  { nombre: "Teclado mecánico", precio: 220, stock: 5 },
  { nombre: "Mouse gamer", precio: 150, stock: 10 },
  { nombre: "Auriculares", precio: 180, stock: 0 },
  { nombre: "Silla ergonómica", precio: 850, stock: 2 },
  { nombre: "Monitor 27''", precio: 1300, stock: 3 }
];
console.log(productos);

const nuevosProdutos = productos.map((producto)=>{
    let nuevoPrecio;
    if (producto.stock > 0) {
       nuevoPrecio = producto.precio > 500? producto.precio * 0.80 : producto.precio;
    }else{
        nuevoPrecio = "Agotado"
    }
    return {nombre: producto.nombre, precio: nuevoPrecio, stock: producto.stock};
});

console.log(nuevosProdutos);

nuevosProdutos.map(({nombre,precio,stock}) => {
    if (typeof precio != "string") {
        console.log(`${nombre} tiene un precio de ${precio} y quedan ${stock}`);
    }
    else{
        console.log(`${nombre} esta ${precio}`);
    }
}); 

const calcularGananciaTotal = nuevosProdutos.reduce((acumulador, actual,index) =>{
    if (typeof acumulador.stock != "string") {
       return acumulador * actual;
    }
});


