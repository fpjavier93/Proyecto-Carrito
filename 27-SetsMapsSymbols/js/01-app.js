// =====================
// SET
// =====================




const numeros = [10, 20, 30, 40, 50, 10, 20];
const noDuplicado = [];
//bastante util cuando quiero eliminar duplicados en jun array
const sinDuplicados = [...new Set(numeros)];

console.log(sinDuplicados);



const carrito = new Set();

carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #2'); // no lo muestra porque es duplicado
carrito.add('Disco #3');
carrito.add('Disco #4');
carrito.add('Disco #5');

console.log(carrito);


carrito.delete('Disco #4')

console.log(carrito);


console.log('SIZE');
console.log(carrito.size);

console.log('HAS');
console.log( carrito.has('Disco #6') );

carrito.clear();
console.log(carrito)








//como hacerlo com forEach
numeros.forEach(n => {
    if (!noDuplicado.includes(n)) {
        noDuplicado.push(n)
    }
});

console.log(noDuplicado);

