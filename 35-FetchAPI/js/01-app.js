const loadTxtBtn = document.querySelector('#cargarTxt');
loadTxtBtn.addEventListener('click', getDatos);

function getDatos() {
    //fetch() recibe y envia datos
    const url = 'data/datos.txt';
    console.log(url);

    fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) { //!respuesta.ok detecta errores HTTP
                throw new Error("No existe el archivo"); //el throw es para q la promise falle y entonces entre al catch
            }
           return respuesta.text();
        })
        .then(datos => { //en este segundo then viene el contenido de la respuesta anterior
            console.log(datos)
        })
        .catch(error => {
            console.log(`Ocurrio un error ${error}`)
        })
} 