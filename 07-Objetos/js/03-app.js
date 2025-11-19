const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg"

//EliminAR PROPIEDAD de un objeto
delete producto.precio;


console.log(producto);


console.log('*************************');

let pc = {
    color: 'negro',
    micro: 'Ryzen 5',
    ram: 64 + ' GB',
}

pc.tarjetaVideo = '7800 XT';

console.log({ ...pc }); //Para que la consola no actualice el objeto de forma dinamica

if (pc.tarjetaVideo) {
    console.log('tiene tarjera')
} else {
    console.log('No tiene tarjera')
}

delete pc.ram;

console.log(pc);
