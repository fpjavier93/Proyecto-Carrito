function descargarClientes() {

    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes de descargo')
            } else {
                reject('Error al cargar la base de datos')
            }

        }, 1000);


    })
};

//Async Await en function express y Declaration
const ejecutar = async ()=> {
    try {
        console.log(1+2);
        const respuesta = await descargarClientes();
        //hatsa q no termine de ejecutarse await descargarClientes(); no va a continuar el codigo
        //si detecta un error no va a continuar y va a ir directo al catch()
        console.log(2+2);
        console.log(respuesta)
    } catch(error){
        console.log(error);
    }
  };

  ejecutar();