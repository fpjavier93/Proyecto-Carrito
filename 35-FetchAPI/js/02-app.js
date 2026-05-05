const loadJSONBtn = document.querySelector('#cargarJSON');
const content = document.querySelector('.contenido');

loadJSONBtn.addEventListener('click', getJSON);

function getJSON() {
    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("'JSON no encontrado");
            }
            return respuesta.json()
        })
        .then(datos => showHTML(datos))
        .catch(error => console.log(error))
}


function showHTML(JSON) {
    const { id, empresa, nombre, trabajo } = JSON;

    const div = document.createElement('div');

    div.innerHTML = `
    <p>Empleado: ${nombre} </p>
    <p>Empleado: ${empresa} </p>
    <p>Empleado: ${id} </p>
    <p>Empleado: ${trabajo} </p>
    `
    content.appendChild(div);


    setTimeout(() => {
        div.remove()
    }, 1000);
}