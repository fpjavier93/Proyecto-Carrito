function descargarNuevosClientes() {
    return new Promise((resolve, reject) => {

        
        console.log('Descargando clientes...');

        setTimeout(() => {
            reject('Los clientes no fueron descargados');
        }, 2000);
    })
};

function descargarNuevosPedidos() {
    return new Promise((resolve) => {
        console.log('Descargando perdidos...');

        setTimeout(() => {
            console.log('esto si se ejecuta');
            resolve('Los pedidos fueron descargados');
        }, 4000);
    })
};

// const app = async() =>{
//     try{
//         const respuesta = await descargarNuevosClientes();
//         console.log(respuesta);

//         const pedidos = await descargarNuevosPedidos();
//         console.log(pedidos)
//     } catch(error){
//         console.log(error);
//     }

// }
//de la manera anterior primero se espera a terminar la ejecucion de la primera funcion para q se ejecute la segunda
//en este caso se pierde optimizacion xq una no depende del suceso la otra para q se ejecute, por tanto esperar
//es demorarse por gusto

// const app = async () => {
//     try {
//         const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()])
        
//         console.log(respuesta);
//         console.log(respuesta[0]);
//         console.log(respuesta[1]);

//     } catch (error) {
//         console.log('entrando al error');
//         console.log(error);
//     }

// }

const app = async () => {
    try {
        const resultados = await Promise.allSettled([descargarNuevosClientes(), descargarNuevosPedidos()])
        
        console.log(resultados);

        const exitosos = resultados.filter(r=> r.status === 'fulfilled')
        .map(r=>r.value);
        console.log(exitosos)
              
    } catch (error) {
        console.log('entrando al error');
        console.log(error);
    }

}
app()
