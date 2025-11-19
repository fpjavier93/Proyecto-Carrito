
// Contenedor del carrito (el dropdown)
const carrito = document.querySelector('#carrito');

// Donde vamos a insertar los cursos dentro de la tabla
const contendedorCarrito = document.querySelector('#lista-carrito tbody');

// Botón para vaciar el carrito
const vaciarCarrito = document.querySelector('#vaciar-carrito');

// Contenedor donde están todos los cursos de la web
const listaCursos = document.querySelector('#lista-cursos');

//Creando array
let articulosCarrito = [];

// Detecta clicks en los cursos usando delegación de eventos
listaCursos.addEventListener('click', agregarCurso);


// =========================
// FUNCIONES
// =========================

// Maneja el click en "Agregar al carrito"
function agregarCurso(e){
    e.preventDefault(); // Evita recargar la página al hacer click en un <a>
    console.log(e.target.classList);
    // Verifica si el click ocurrió en un botón con la clase "agregar-carrito"
    if (e.target.classList.contains('agregar-carrito')) {

        // Subimos dos niveles: botón → info-card → card
        const cursoSeleccionadoCard = e.target.parentElement.parentElement;
        console.log(cursoSeleccionadoCard);

        // Enviamos la card completa a la función que extrae los datos
        leerDatosCurso(cursoSeleccionadoCard);
    }
}


// Extrae la información del curso clickeado y crea un objeto con ella
function leerDatosCurso(curso) {
        // Creamos un objeto con toda la info del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,          // URL de la imagen
        titulo: curso.querySelector('h4').textContent,   // Título del curso
        precio: curso.querySelector('.precio span').textContent, // Precio
        id: curso.querySelector('a').getAttribute('data-id'),     // ID único
        cantidad: 1                                      // Siempre empieza en 1
    };

    //agregando objeto al array
    articulosCarrito.push(infoCurso);
    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML(){

    //Limipiar HTML
    articulosCarrito.forEach(curso=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contendedorCarrito.appendChild(row);
    })

}


//Elinar los cursos del tbody

function limpiarHTML(){
    contendedorCarrito.
}