const nombre = "Monitor 20 Pulgadas"
const precio = 300;
const disponible = true;

//Un objeto agrupa todo en una sola variable

//Object litreal

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);

let Usuario = {
    nombre: prompt('Nombre').toUpperCase(), // añadi .toUpperCase para que el nombre se guardara en mayusculas
    apellidos: prompt('Apellidos'),
    edad: Number.parseInt(prompt('Edad')),

}

console.log(Usuario);