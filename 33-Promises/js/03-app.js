const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = true;

    if (descuento) {
        const descValue = mensajeDescuento();
        resolve(descValue);

    } else {
        reject('No se pudo aplicar')
    }
});

aplicarDescuento
    .then(mensaje => console.log(mensaje))
    .catch(error=>console.log(error));


    function mensajeDescuento() {
        return 'Descuento aplicadooooooo'
    };

