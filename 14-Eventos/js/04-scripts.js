const formulario = document.querySelector('#formulario')

// formulario.addEventListener('submit', (e)=>{
//     e.preventDefault(); //este metodo previene la accion q realizaria el elemento por default
    
//     console.log("Buscando")

//     console.log(e);
// }); 


//añadiendole una funcion al evento 

function validarFormulario(e) {
     e.preventDefault();
     console.log("Buscando")

    console.log(e);

}

formulario.addEventListener('submit', validarFormulario);