(function () {
    //selectores
    const inputName = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputPhone = document.querySelector('#telefono');
    const inputEmpresa = document.querySelector('#empresa');
    const formulario = document.querySelector('#formulario');

    let user;
    document.addEventListener('DOMContentLoaded', () => {
        conectDB();
        //Listeners
        formulario.addEventListener('submit', validarCliente);

    })

    //Funciones
    function validarCliente(e) {
        e.preventDefault();
        if (inputName.value == "" || inputEmail.value == "" || inputPhone.value == "" || inputEmpresa.value == "") {
            printAlert('Todos los campos son obligatorios', 'error');
            return;
        } else {
            agregarCita();
        }
    }

    function agregarCita() {
        user = new Cliente(
            inputName.value,
            inputEmail.value,
            inputPhone.value,
            inputEmpresa.value);

        user.addClientToDB();        
    };
    

    function eliminarCliente(id) {
        let transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.delete(id)

        transaction.oncomplete = function () {
            console.log('Cliente Eliminado')
        }

        transaction.onerror = function () {
            console.log('Error')
        }

    }

    //clases
    class Cliente {
        constructor(nombre, email, telefono, empresa) {
            this.nombre = nombre;
            this.correo = email;
            this.telefono = telefono;
            this.empresa = empresa;
        }
        addClientToDB() {
            let transaction = DB.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm');

            const request = objectStore.add(this);

            request.onerror = () => printAlert('Error, duplicado', 'error');
            request.onsuccess = (e) => {
                this.id = e.target.result;
                printAlert('Usuario Agregado', 'success')
                formulario.reset();
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);

            }
            transaction.oncomplete = () => console.log('Transaccion terminada');
        }

    };  
        
   

})();



