const loadApiBtn = document.querySelector('#cargarAPI');

loadApiBtn.addEventListener('click', load);

function load() {
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(response => response.json())
        .then(value => showHTML(value));

}

function showHTML(DataJSON) {
    const content = document.querySelector('.contenido');

    let html = DataJSON.map(dato => {

        const { author, post_url } = dato;

        return `
        <p> Autor: ${author} </p>
        <a href ='${post_url}' target="_blank">Ver Imagen </a> 
        `
        
    }).join('');
    content.innerHTML = html;
}


