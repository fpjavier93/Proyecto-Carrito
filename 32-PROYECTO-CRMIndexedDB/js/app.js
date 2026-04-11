//creando IIFE para q todas las variables q se creen se queden de manera local en este archivo
(function () {
    let DB;
    const listadoClientes = document.querySelector('#listado-clientes');


    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        if (window.indexedDB.open('crm', 1)) {
            printClientToHTML();
        }

        listadoClientes.addEventListener('click', eliminarRegistro);
    })

    //crea la BD
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function () {
            console.log('Ocurrio un error')
        };

        crearDB.onsuccess = function () {
            DB = crearDB.result;
            console.log(DB)
        };

        crearDB.onupgradeneeded = function (e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            objectStore.createIndex('Nombre', 'nombre', { unique: false });
            objectStore.createIndex('Correo', 'correo', { unique: true });
            objectStore.createIndex('Telefono', 'telefono', { unique: false });
            objectStore.createIndex('Empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });

            console.log('DB lista y creada');
        }

    };

    function printClientToHTML() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function () {
            console.log('hubo un error');
        };

        abrirConexion.onsuccess = function () {
            DB = abrirConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');

            objectStore.openCursor().onsuccess = function (e) {
                const cursor = e.target.result;

                if (cursor) {
                    const { nombre, correo, telefono, empresa, id } = cursor.value;
                    
                    listadoClientes.innerHTML += ` 
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 bg-teal-600">
                     <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                     <p class="text-sm leading-10 text-gray-700"> ${correo} </p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                     <p class="text-gray-700">${telefono}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                     <p class="text-gray-600">${empresa}</p>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                  </td>
                 </tr>
  `;
                    cursor.continue();
 
                } else {
                    console.log('no hay mas registros')
                }

            }

        }

    }

    function eliminarRegistro(e) {
        if(e.target.classList.contains('eliminar')){
            //vamos a asignar en una variable accediendo a los atributos personalisados en HTML q fueron agregados, en este caso fue
            //data-cliente="${id}" que contiene el ID del cliente.
            const idEliminar = Number(e.target.dataset.cliente);
            const confirmar = confirm('desea eliminar el cliente?')
            if(confirmar){
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');
                objectStore.delete(idEliminar);
                transaction.oncomplete = function () {
                    console.log('eliminado');
                    //window.location.href = 'index.html'; recarga la pagina y ya sale con el cliente eliminado
                    //e.target.parentElement.parentElement.remove();
                    
                    e.target.closest('tr').remove(); //manera mas profesional todavia
                };
                transaction.onerror = function () {
                    console.log('ocurrio un error')
                };
            }

        }
        
    }

})();