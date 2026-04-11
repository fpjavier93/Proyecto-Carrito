const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}


function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Cuba', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Brasil', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Estados Unidos', mostrarPaises);
            }, 2000);
        }, 2000);
    }, 2000);


}

iniciarCallbackHell();