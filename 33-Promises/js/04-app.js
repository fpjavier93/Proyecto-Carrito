const paises = [];

const agregarPais = pais => new Promise (resolve =>{
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado ${pais}`);
    }, 2000);
});

agregarPais('Cuba')
.then(result => {
    console.log(result)
    console.log(paises);
    return agregarPais('EEUU')
})
.then(result=>{
    console.log(result);
    console.log(paises);
    return agregarPais('Brasil')
})
.then(result=>{
    console.log(result);
    console.log(paises);
})

