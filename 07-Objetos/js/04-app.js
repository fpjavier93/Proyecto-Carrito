const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


//extraer del objeto, destructuring

const{nombre, precio} = producto;


console.log(nombre);
console.log(precio);

let pc = {
    color: 'negro',
    micro: 'Ryzen 5',
    ram: 64 + ' GB',
}
let{color, micro} = pc; // aqui estoy creando dos variables del mismo nombre de las propiedades del objeto y extrayendolas
let{ram} = pc;

delete pc.color;
delete pc.micro;

console.log(color);
console.log(ram);
console.log(pc);