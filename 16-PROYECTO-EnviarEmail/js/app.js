//se asegura que cargue todo el HTML antes de ejecutar el codigo JS
document.addEventListener('DOMContentLoaded', function () {
    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = this.documentElement.querySelector('#formulario');

    //asignar evento
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    //creando una funcion reutilizable
    function validar(e) {
        console.log(e.target.id);
        const empty = e.target.value;
        if (empty.trim() === '') {
            Alert(`El campo ${e.target.id} es obligatoro`);
            //aberracion con Swith jjjj
            // switch (typeError) {
            //     case 'email':
            //         Alert(`El campo email es obligatoro`);
            //         break;
            //     case 'asunto':
            //         Alert(`El campo asunto es obligatoro`);
            //         break;

            //     case 'mensaje':
            //         Alert(`El campo mensaje es obligatoro`);
                    
            //         break;

            //     default:
            //         break;
            // }

        }
    }

    function Alert(sms) {
        //Generar alerta HTML
        const error = document.createElement('P');
        error.textContent = sms;
        //diseñando el mensaje...
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        //inyectar el error al formulario
        formulario.appendChild(error) // appendChild es un hijo a la rama de formulario en donde se crea el texto
        //otra forma
        //formulario.innerHTML = error.innerHTML;
    }
});
