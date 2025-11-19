const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: false,
}

if (producto.disponible) { //Cree una condicional, puedo acceder a una propiedad de un objeto y cambiar su valor por in if
    producto.disponible = false
} else {
    producto.disponible = true
}


console.log(producto);

console.log('************************')
console.log(producto.disponible);


//Acceder a los valores del objeto
console.log(producto.nombre);
console.log(producto['nombre']); // Tambien se puede poner asi
console.log(producto.precio);

