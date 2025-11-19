//Agregar nuevos valores al inicio o al final de los arrays

const meses = ['Enero', 'Febrero', 'Marzo'];

console.log('*************************');

//Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');
console.table(meses);


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

carrito.push(producto);
carrito.push(producto2);

//Agregar al inicio del array
carrito.unshift(producto3);

console.table(carrito);

console.log('*************************');


const teclados = [];

const Teclado = {
   nombre: 'Viper',
   precio: 100
}

const Teclado2 = {
   nombre: 'Logitech',
   precio: 200
}

const Teclado3 = {
   nombre: 'HyperX',
   precio: 300
}

const Teclado4 = {
   nombre: 'Corsair',
   precio: 400
}

teclados.push(Teclado);
teclados.push(Teclado2);  
teclados.push(Teclado3);

console.log(teclados);

teclados.unshift(Teclado4);

console.log(teclados);