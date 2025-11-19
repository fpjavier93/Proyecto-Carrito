//crear un objeto dentro de otro objeto
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

console.log(producto);

//llamar un elemento del objeto en especifico
console.log(producto.informacion.fabricacion);


console.log('******************');
//tambien se llama objeto anidado

let pc = {
    color: 'negro',
    micro: 'Ryzen 5',
    ram: 64 + ' GB',
    otrosComponentes: {
        windows: 'Windiws 10',
        version: '2.5',
        peso: '1 kg'
        }
}

console.log(pc.otrosComponentes);

console.log(pc.otrosComponentes.windows);

console.log(pc);