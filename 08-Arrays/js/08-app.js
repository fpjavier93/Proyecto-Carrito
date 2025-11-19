const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

console.log(producto);

console.log('****************************');

//  let nombre = producto.nombre;

//  console.log(nombre);


const {disponible} = producto;
console.log(disponible);


 //destreucuring en arreglos

 const numeros = [10,20,30,40,50];

 //el primer valor es la posicion 0 y asi consecutivamente...
//  const[primero,segundo,tercero] = numeros;



 //ahora solo para extraer el valor que interesa...

 const[primero, , tercero] = numeros;

 console.log(tercero);
 console.log(primero);

 console.log('****************************');

 //solo para extraer mas valores y que esten en su propio arreglo

 const[ primeroo, segundoo, ...terceroo] = numeros;

 console.log(terceroo);

 console.log('****************************');
 console.log('****************************');

 const paciente = ['Juan', 22, 'M', 1993];

//  alert(`el paciente ${paciente[0]}, tiene ${paciente[1]} años de edad`);
 console.log(paciente);

const [nombre, edad, sexo, año] = paciente;

let datosEdad = paciente[1];

// alert(`El paciente ${nombre}`);

console.log(datosEdad);