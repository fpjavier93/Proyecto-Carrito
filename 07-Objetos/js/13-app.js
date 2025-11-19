const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    }

//para saber si el objeto tiene o no tiene informacion
//retorna las llaves
console.log( Object.keys(producto));

//para value retorna los valores dentro del objeto
//retorna los valores
console.log( Object.values(producto));

//retorna todo
console.log( Object.entries(producto));