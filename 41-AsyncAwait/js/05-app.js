const url = 'https://picsum.photos/list';

//Realizado con promises
document.addEventListener('DOMContentLoaded', obtenerDatos2);

function obtenerDatos() {
    fetch(url).then(response => response.json())
        .then(datos => console.log(datos))
        .catch(error => console.log(error))
}

//realizado con async await
async function obtenerDatos2() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)

    } catch (error) {
        
    }
};
