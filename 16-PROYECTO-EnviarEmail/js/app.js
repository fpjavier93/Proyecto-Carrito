//se asegura que cargue todo el HTML antes de ejecutar el codigo JS
document.addEventListener('DOMContentLoaded', function () {
    //creando objeto para validar los datos y activar el boton de enviar
    const email = {
        email: "",
        asunto: "",
        mensaje: ""
    }

    //seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = this.documentElement.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    //extra mio, agregando texto al final del formulario
    const newText = document.createElement('P');//variable que almacena el texto HTML
    newText.textContent = "hola" // texto
    formulario.appendChild(newText); //agregando texto al final del formulario


    //asignar evento
    //con el blur, cuando se clickea fuera del formulario se activa
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        formulario.reset();
        email.email = "";
        email.asunto = "";
        email.mensaje = "";
        comprobarEmail();
        formulario.reset();
    });

    //creando una funcion reutilizable
    function validar(e) {
        //nextElementSibling: cuando clickas en el formulario muestra las caracteristicas del siguiente
        //console.log(e.target.parentElement.nextElementSibling);
        console.log(e.target.parentElement);
        const ref = e.target.parentElement;
        const empty = e.target.value;
        const sms = `El campo ${e.target.id} es obligatoro`;
        const smsEmail = `El Email es incorrecto`;
        if (empty.trim() === '') {
            Alert(sms, ref);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        if (e.target.id == "email" && !validarEmail(empty)) {
            Alert(smsEmail, ref)
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        //Comprobar email
        comprobarEmail();


        limpiarAlerta(ref);

    }

    function Alert(sms, referencia) {
        //Comprueba si ya existe una alerta
        limpiarAlerta(referencia)
        //Generar alerta HTML
        const smsError = document.createElement('P');
        smsError.textContent = sms;
        //diseñando el mensaje...
        smsError.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        //inyectar el error al formulario
        referencia.appendChild(smsError) // appendChild es un hijo a la rama de formulario en donde se crea el texto
        //otra forma
        //formulario.innerHTML = error.innerHTML;
    }

    function limpiarAlerta(referencia) {
        const catchRef = referencia.querySelector('.bg-red-600');
        if (catchRef) {
            catchRef.remove();
        }
    }

    function validarEmail(email) {
        //Expresion regular: 
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if (Object.values(email).includes("")) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        } else {
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }



});


