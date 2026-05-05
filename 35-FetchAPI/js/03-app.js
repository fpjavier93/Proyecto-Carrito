const loadJSONArray = document.querySelector('#cargarJSONArray');
const content = document.querySelector('.contenido');

document.addEventListener('DOMContentLoaded', load);

function load() {
    fetch('data/empleados.json')
    .then(resultado => resultado.json())
    .then(valor => prineHTML(valor))
}


function prineHTML(JSON) {
    
    setTimeout(() => {
        for (const archivo of JSON) {
        const div = document.createElement('div');
        div.innerHTML = `
        <p> id: ${archivo.id} </p>
        <p> nombre: ${archivo.nombre} </p>
        <p> empresa: ${archivo.empresa} </p>
        <p> trabajo: ${archivo.trabajo} </p>
        `
        content.appendChild(div);
    }
    }, 2000);
    

    

}