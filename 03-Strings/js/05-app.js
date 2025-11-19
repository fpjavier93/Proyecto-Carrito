// Metodo Replace, Slice y Substring
const producto = 'Monitor de 20 Pulgadas';
let otroProducto = "Mouse Pad";


 console.log(producto);
 //.replace paraq Reemplazar alguna palabra
console.log(producto.replace('Monitor', 'Canon').replace('Pulgadas', 'Hectareas'));

console.log(producto.replace('Monitor de 20 Pulgadas', 'La tiza es grande'));
 

// .slice para cortar
 console.log(producto.slice(0,14));
 console.log(producto.slice(11));
 console.log()
 console.log(otroProducto.slice(0,5));

 console.log("*****************************");
 //Alternativa a Slice... subtring (la diferencia es q si a este le pasas primero un numero mayor el lo modifica, lo ordena )
 console.log(producto.substring(14,0));

 console.log("*****************************");


 //Ejemplo de como en google logran dejar la inicial de tu nombre en el logo de la sesion
 const usuario = 'Javier';

 console.log(usuario.substring(0,1));
 console.log(usuario.charAt(0)); // Directamente solo pone la letra que este en esa posicion



