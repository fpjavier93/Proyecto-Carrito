let producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    otros: {
        disponibilidad: true,
        voltaje: "220 V"
    }

}

const medida = {
    peso: "1 KG",
    medida: "1M"
}

console.log(producto);
console.log(medida);

console.log('***********************');

//Copiar 2 objetos
//const resultado = Object.assign(producto, medida);

//console.log(resultado);

//Otra manera de hacerlo>
//Spread Operator o Rest Operator
//const resultado2 =  {...producto, ...medida}
//console.log(resultado2);

console.log('**********************');

const otrasPropiedades = {
    año: 2025,
    color: 'Rojo',
}

const resultado3 = Object.assign(otrasPropiedades, producto.otros);

//otra manera de copiar 2 objetos

//const resultado3 = {...otrasPropiedades, ...producto.otros};

console.log(resultado3);