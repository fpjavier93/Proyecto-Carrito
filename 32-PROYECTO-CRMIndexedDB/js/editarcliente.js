(function () {
    let idCliente;
    const inputName = document.querySelector('#nombre');
    const inputEmail = document.querySelector('#email');
    const inputPhone = document.querySelector('#telefono');
    const inputEmpresa = document.querySelector('#empresa');
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectDB();

        //Verificar el ID de la URL
        const parametrosURL = new URLSearchParams(window.location.search);
        idCliente = Number(parametrosURL.get('id'));

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 300);
        }

        formulario.addEventListener('submit', actualizarCliente);

    });

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');
        objectStore.openCursor().onsuccess = function (e) {
            const cursor = e.target.result;

            if (cursor) {

                if (cursor.value.id == id) {
                    console.log(cursor.value)
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    };

    function llenarFormulario(datosCliente) {
        const { nombre, correo, empresa, telefono } = datosCliente;
        inputName.value = nombre;
        inputEmail.value = correo;
        inputEmpresa.value = empresa;
        inputPhone.value = telefono;
    };

    function actualizarCliente(e) {
        e.preventDefault();
        if (inputName.value === '' || inputEmail.value === '' || inputEmail.value === '' || inputPhone.value === '') {
            printAlert('error al editar', 'error')
            console.log('printalert')
            return;
        } else {
            console.log('editado...')
            let userAct = new Cliente(
                inputName.value,
                inputEmail.value,
                inputPhone.value,
                inputEmpresa.value,
                idCliente);
            console.log(userAct);
            const transaction = DB.transaction(['crm'], 'readwrite')
            const objectStore = transaction.objectStore('crm');
            objectStore.put(userAct);

            transaction.oncomplete = function () {
                printAlert('Usuario editado', 'succes');
            formulario.reset();
            setTimeout(() => {
                    formulario.lastChild.remove();
                    window.location.href = 'index.html';
                }, 3000);
                
            }
            transaction.onerror = function () {
                console.log('hubo un error')
            }
        }
    };

    class Cliente {
        constructor(nombre, email, telefono, empresa, id) {
            this.nombre = nombre;
            this.correo = email;
            this.telefono = telefono;
            this.empresa = empresa;
            this.id = id;
        }
        addClienteToDB(userAct) {
            console.log(userAct);
            let transaction = DB.transaction(['crm'], 'readwrite');
            const objectStore = transaction.objectStore('crm');

            const request = objectStore.add(userAct);

            request.onerror = () => {
                printAlert('Error, duplicado', 'error');
                console.log('removiendo...');
                setTimeout(() => {
                    formulario.lastChild.remove();
                }, 1000);
            }
            request.onsuccess = (e) => {
                userAct.id = e.target.result;
                printAlert('Usuario Agregado', 'success')
                formulario.reset();
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);

            }
            transaction.oncomplete = () => console.log('Transaccion terminada');
        };
    };
})();


