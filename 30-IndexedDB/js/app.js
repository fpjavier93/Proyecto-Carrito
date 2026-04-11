//variable global ed la base de datos
let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 1000);
})

function crmDB() {
    //crear base de datos v1.0
    let crmDB = window.indexedDB.open('crm', 1); //(nombreBD, version)

    //si hay error
    crmDB.onerror = function () {
        console.log('Hubo un error al crear la base de datos')
    }
    //configuracion de la base de datos
        //este metodo se ejecuta una sola vez, normalemnte cuando se crea la base de dato se ejecuta o cuando se cambia la version
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        //object store
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'id',
            autoIncrement: true
        });

        //definir las columnas
        objectStore.createIndex('Nombre', 'nombre', { unique: false }); // false xq la base de datos puede tener nombres iguales
        objectStore.createIndex('email', 'email', { unique: true }); // true xq no deben haber emails repetidos, sino unicos
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');

    }

    //si se creó bien
    crmDB.onsuccess = function () {
        console.log('Base de datos creada');
        DB = crmDB.result; // <---- Importante!!!!!
    }
}

function crearCliente() {
    //trabajar con la tabla 'crm' en modo lectura/escritura
    let transaction = DB.transaction(['crm'], 'readwrite');
    const objectStore = transaction.objectStore('crm');

    const nuevoCLiente = {
        telefono: 4899884,
        nombre: "Javier",
        email: 'email@gmail.com'
    }

    const peticion = objectStore.add(nuevoCLiente);
    const nombre = objectStore.get(nuevoCLiente.nombre);
    console.log(peticion);
    console.log(nombre);

    transaction.oncomplete = function () {
        console.log('transaccion competata');

    }
    transaction.onerror = function () {
        console.log('error de transaccion');
    }
}



//-----------Resumiendo-----------
// 1 abrir DB
// 2 configurar DB
// 3 crear transaccion
// 4 acceder tabla
// 5 agregar / leer datos