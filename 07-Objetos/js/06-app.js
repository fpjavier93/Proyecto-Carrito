//aplicar destructuring a un obeto dentro de otro

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: "1kg",
        medida: "1m",
        otros: {
            color: "blanco",
            condicion: "bueno"
        },
        fabricacion: {
            pais: "China"        
        } 
    }
}

const {nombre, precio, informacion: {fabricacion, fabricacion: {pais} } } = producto;

console.log(nombre);
console.log(precio);

console.log(fabricacion);
console.log(pais);

console.log('*******************');

let pc = {
    color: 'negro',
    micro: 'Ryzen 5',
    ram: 64 + ' GB',
    otrosComponentes: {
        windows: 'Windiws 10',
        version: '2.5',
        peso: '1 kg',
        },
    mas: {
            otros: 'es bueno',
            dureza: '5 estrellas'
        }
}


// let {color, otrosComponentes: {version}} = pc;

// let {micro, ram, otrosComponentes:{windows, mas: {otros}}} = pc;

// console.log(color);
// console.log(ram);
// console.log(windows);
// console.log(version);

// let {otrosComponentes: {mas: {dureza}}} = pc;

// let {micro, otrosComponentes: {peso, mas:{otros}}} = pc

let {otrosComponentes} = pc;
let {mas: {otros}} = pc;

console.log(otrosComponentes);
console.log(otros);