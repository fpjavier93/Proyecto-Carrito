//Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaAltaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');
const formularioCita = document.querySelector('#formulario-cita')
const formularioinput = document.querySelector('#formulario-cita input[type="submit"]')
const citasContainerHTML = document.querySelector('#citas');
const btnEditarEvent = document.querySelector('.btn-editar');
const btnEliminar = document.querySelector('.btn-eliminar');

let editando = false;
let valorEditado;

//let listaPacientes = [];
//let smsactivate = false;
//Listeners
formularioCita.addEventListener('submit', agregarPaciente,);


//Creando clase
class Paciente {
    constructor(paciente, propietrario, email, fechaAlta, sintomas) {
        this.paciente = paciente;
        this.propietario = propietrario;
        this.email = email;
        this.fechaAlta = fechaAlta;
        this.sintomas = sintomas;
        this.id = this.generarID();
    }
    generarID() {
        return Math.random().toString(36).substring(2) + Date.now();

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
        citas.mostrarCitasHTML(cita);
        console.log(this.citas)
    }
    editarCitas(citaActualizada) {
        this.citas = this.citas.map((cita) => {
            if (cita.id === citaActualizada.id) {
                return citaActualizada;
            } else {
                return cita;
            }

        })
        this.mostrarCitasHTML();
    }
    eliminarPaciente(citaActual) {
        this.citas = this.citas.filter(cita => cita.id !== citaActual.id);

        this.mostrarCitasHTML();
        console.log(this.citas);
    }
    mostrarCitasHTML() {
        //Limpiar HTML
        while (citasContainerHTML.firstChild) {
            citasContainerHTML.removeChild(citasContainerHTML.firstChild)
        }
    //Comprobar si hay citas
    if (this.citas.length === 0) {
        citasContainerHTML.innerHTML = '<p class="text-xl mt-5 mb-10 text-center">No Hay Pacientes</p>';
        return;
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
            propietario.innerHTML = `<span class='font-bold uppercase'> Paciente:</span> ${cita.propietario}`;

            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fechaAlta}`;

            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            //boton para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase',
                'rounded-lg', 'flex', 'items-center', 'gap-2', 'btn-editar');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            btnEditar.onclick = this.editarPaciente.bind(cita);



            //boton para eliminar
            const btnEliminar = document.createElement('button');

            btnEliminar.classList.add('py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg',
                'flex', 'items-center', 'gap-2', 'btn-eliminar');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'


            const contenedorBotones = document.createElement('div');
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10');
            //dos formas de hacer lo mismo
            //btnEliminar.onclick = this.eliminarPaciente.bind(this,cita);
            btnEliminar.onclick = ()=> this.eliminarPaciente(cita);

            //inyectar HTML
            //insertando el texto en la DIV
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);
            //insertando la DIV en la DIV id_citas
            citasContainerHTML.appendChild(divCita);
            divCita.appendChild(contenedorBotones);
        })
    }
    editarPaciente() {
        pacienteInput.value = this.paciente;
        propietarioInput.value = this.propietario;
        emailInput.value = this.email;
        fechaAltaInput.value = this.fechaAlta;
        sintomasInput.value = this.sintomas;

        editando = true;

        //aqui valorEditado Guarda la referencia viva al objeto que está dentro del array, la direccion en memoria
        valorEditado = this;

        formularioinput.value = 'Guardar Cambios';

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


    if (editando) {
        const citaActualizada = new Paciente(
            pacienteInput.value,
            propietarioInput.value,
            emailInput.value,
            fechaAltaInput.value,
            sintomasInput.value
        )
        citaActualizada.id = valorEditado.id;

        citas.editarCitas(citaActualizada)
        const alert = new Notificacion(`Exito!!!`);
        alert.mostrar();
        formularioCita.reset();
        editando = false;
        console.log(citas);

    } else {
        // construyendo obj
        const paciente = new Paciente(
            pacienteInput.value,
            propietarioInput.value,
            emailInput.value,
            fechaAltaInput.value,
            sintomasInput.value
        );

        // agregando obj al array
        citas.agregarCita(paciente);
    }
    const alert = new Notificacion(`Exito!!!`);
    formularioinput.value = 'Registrar Paciente';
    alert.mostrar();
    formularioCita.reset();


    //validacion general
    // if(Object.values(paciente).some(val=> val.trim() == "")){
    //     console.log('Todos los campos son obligatorios');
    //     return;
    // };


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