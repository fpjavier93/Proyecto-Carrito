//Como se comunican las funciones

function iniciarApp() {
    console.log('iniciando App')
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion')
    autenticando("Pablo");
}

function autenticando(usuario) {
    console.log(`Autenticando usuario ${usuario} ... espere...`);
    console.log('Exito');
}

iniciarApp();