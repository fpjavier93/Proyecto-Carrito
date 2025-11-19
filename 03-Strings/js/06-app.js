const producto = 'Monitor de 20 Pulgadas';

//.repeat te va a permitir repetir una cadena de texto...

const texto = ' en promocion';

console.log(producto.repeat(3) + texto.repeat(2));

console.log(`Atencion el ${producto} ahora mismo esta en ${texto.repeat(2)}`);

console.log("***************************************");

//Split, divide un string, dentro del () va a buscar lo q quiere dividir, espacios en blanco " " o donde halla ,
const actividad = 'Estoy aprendiendo JavaScript'
console.log(actividad.split(" "));

const hobbies = 'Leer, jugar, aprender, programar';
console.log(hobbies.split(","));

let hobby = prompt('Coloca tus hobbies');
console.log(hobby.split(","));