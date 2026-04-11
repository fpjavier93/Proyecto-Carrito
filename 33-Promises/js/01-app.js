//Callbaks

const paises = ['Cuba', 'Argentina', 'Brasil', 'Estados Unidos'];

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach( pais =>{
            console.log(pais);
        })
    }, 1000);
}

//mostrarPaises();

function agregarPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
    callback();
    }, 2000);
};

agregarPais('Venezuela', mostrarPaises);