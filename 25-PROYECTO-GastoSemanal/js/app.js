// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastolistado = document.querySelector('#gastos ul');
const fomrGasto = document.querySelector('#agregar-gasto');
const gastos = [];


//Eventos

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);

}



//Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

//clase q muestra interfaz en el HTML
class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;
        //Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    smsHTML(mensaje, tipo) {
        const divSmsHTML = document.createElement('div');
        divSmsHTML.classList.add('text-center', 'alert');
        if (tipo == 'error') {
            divSmsHTML.classList.add('alert-danger');
        } else {
            divSmsHTML.classList.add('alert-success');
        }
        divSmsHTML.textContent = mensaje;
        document.querySelector('.primario').insertBefore(divSmsHTML, formulario);


        setTimeout(() => {
            divSmsHTML.remove();
        }, 1000);
    }
}

//Instanciar
const ui = new UI();
let classPresupuesto;

///Funciones

function preguntarPresupuesto() {
    let presupuestoUsuario = prompt('Cual es su presupuesto');

    if (presupuestoUsuario === "" || presupuestoUsuario == null || presupuestoUsuario <= 0 || isNaN(presupuestoUsuario)) {
        alert('invalido');
        window.location.reload(); //recarga toda la ventana
    }
    classPresupuesto = new Presupuesto(presupuestoUsuario);


    ui.insertarPresupuesto(classPresupuesto)


}

function agregarGasto(e) {
    e.preventDefault();
    const gastoValue = document.querySelector('#gasto').value;
    //aqui Convertimos la cantidad en numeros, xq se guarda en String
    const cantidadValue = Number(document.querySelector('#cantidad').value);

    if (gastoValue == "" || cantidadValue == "") {
        ui.smsHTML('Campos obligatorios', 'error');
        return;
    } else if (cantidadValue <= 0 || isNaN(cantidadValue)) {
        ui.smsHTML('cantidad errada', 'error');
        return;
    } else if (!isNaN(gastoValue)) {
        ui.smsHTML('gasto errado', 'error');
    } else {
        ui.smsHTML('Exito', 'success')
        const gasto = {gastoValue,cantidadValue, id: Date.now()};
        gastos.push(gasto);
        console.log(gastos);
        classPresupuesto.restante -= cantidadValue;
        ui.insertarPresupuesto(classPresupuesto);  
        return;
    };
}


