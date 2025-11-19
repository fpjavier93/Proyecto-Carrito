//Diferentes maneras de crear una variable String
const producto = "Monitor de 19\""; 
// esto: \" sirve para "escapar las comillas", colocar el simbolo de pulgadas (").


const producto1 = String('Monitor de 27"');

const producto2 = new String('Monitor de 43 pulgadas'); // de esta manera

console.log(producto);
console.log(producto1);
console.log(producto2);