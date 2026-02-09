//Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaAltaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
const formularioCita = document.querySelector('#formulario-cita')
const citasContainerHTML = document.querySelector('#citas');


//let listaPacientes = [];
//let smsactivate = false;
//Listeners
formularioCita.addEventListener('submit', agregarPaciente,);


//Creando clase
class Paciente {
    constructor(paciente, namePropietario, email, fechaAlta, sintomas) {
        this.paciente = paciente;
        this.namePropietario = namePropietario;
        this.email = email;
        this.fechaAlta = fechaAlta;
        this.sintomas = sintomas;
    }
};

class Notificacion {
    constructor(texto, tipo) {
        this.texto = texto;
        this.tipo = tipo;
    }
    mostrar(input) {
        const alerta = document.createElement('div');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm');

        const alertaPrevia = document.querySelector('.alert');

        //si esta el cartel de alerta en ese momento se va a borrar y continua el codigo mostrando otro
        //evitando q se duplique
        // if (alertaPrevia) {
        //     alertaPrevia.remove();
        // }

        //mas optimizado todavia...
        alertaPrevia?.remove();

        this.tipo == 'error' ? alerta.classList.add('bg-red-500') : alerta.classList.add('bg-green-500');

        //mensaje de error
        alerta.textContent = this.texto;

        //ubicacion del mensaje de error
        //Inserta el elemento alerta justo después del elemento input”.

        if (this.tipo == 'error') {
            input.insertAdjacentElement('afterend', alerta);
        } else {
            formularioCita.appendChild(alerta);
        };
        //smsactivate = true;


        //formularioCita.insertBefore(alerta,sintomasInput)

        setTimeout(() => {

            alerta.remove();
            //smsactivate = false;

        }, 3000);


    }
};

class AdminCitas {
    constructor() {
        this.citas = []
    }
    agregarCita(cita) {
        this.citas.push(cita)
        citas.mostrarCitas(cita);
        console.log(this.citas)
    }
    mostrarCitas() {
        //Limpiar HTML
        while (citasContainerHTML.firstChild) {
            citasContainerHTML.removeChild(citasContainerHTML.firstChild)
        }
        this.citas.forEach(cita => {
            const divCita = document.createElement('DIV');

            //Diseñando el DIV, tamaño, contorno, etc...
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10', 'rounded-xl', 'p-3');

            //Añadiendo el texto q hay dentro de la DIV
            const paciente = document.createElement('p');
            //Diseñando el texto...
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            //Informacion del texto...
            paciente.innerHTML = `<span class='font-bold uppercase'> Paciente:</span> ${cita.paciente}`

            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case');
            propietario.innerHTML = `<span class='font-bold uppercase'> Paciente:</span> ${cita.namePropietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;


            //inyectar HTML
            //insertando el texto en la DIV
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            //insertando la DIV en la DIV id_citas
            citasContainerHTML.appendChild(divCita);
        })
    }
}

emailInput.addEventListener('input', () => {
    emailInput.setCustomValidity('') //hace funcion de reset

    if (!emailInput.validity.valid) {
        emailInput.setCustomValidity('El email no es válido'); //construye el texto q va a mostrar
    }
    emailInput.reportValidity();

});

//Instanciar
const citas = new AdminCitas;

//funciones
function agregarPaciente(e) {
    e.preventDefault();
    //Validaciones    
    let pass = validarFormulario()
    if (pass) {
        return;
    };
    if (!formularioCita.checkValidity()) {
        formularioCita.reportValidity();
        return;
    };
    const alert = new Notificacion(`Exito!!!`);
    alert.mostrar();
    // construyendo obj
    const paciente = new Paciente(
        pacienteInput.value,
        propietarioInput.value,
        emailInput.value,
        fechaAltaInput.value,
        sintomasInput.value
    );
    //validacion general
    // if(Object.values(paciente).some(val=> val.trim() == "")){
    //     console.log('Todos los campos son obligatorios');
    //     return;
    // };

    // agregando obj al array
    citas.agregarCita(paciente);

    formularioCita.reset();
};

//validar objeto con for ... of
function validarFormulario() {
    const inputs = [pacienteInput, propietarioInput, emailInput, fechaAltaInput, sintomasInput]
    let error = false;
    for (const input of inputs) {
        if (input.value.trim() == "") {
            const alert = new Notificacion(`rellenar el campo de ${input.id}`, 'error');
            alert.mostrar(input);
            error = true;
        }
    }
    return error;
};