let DB; // Variable global para la base de datos
const formulario = document.querySelector('#formulario');
function conectDB() {
        const openConection = window.indexedDB.open('crm', 1);

        openConection.onerror = function () {
            console.error('Error')
        }
        openConection.onsuccess = function () {
            DB = openConection.result;
        }
    }

function printAlert(mensaje, tipo) {
    console.log('print');
            //crear alerta
            //preguntando si la clase alerta esta activa en ese momento
            if (document.querySelector('.alerta')) return;

            const divSms = document.createElement('div');
            divSms.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alerta'); // cree la clase alerta para saber si esta activo el sms de error
            if (tipo == 'error') {
                divSms.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                divSms.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }
            divSms.textContent = mensaje;

            formulario.appendChild(divSms);
        };
