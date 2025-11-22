
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

cargarEventListeners();

function cargarEventListeners() {
    // Detecta clicks en los cursos usando delegación de eventos
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina elementos del carrito
    carrito.addEventListener('click', eliminarCurso);

}



// =========================
// FUNCIONES
// =========================
''
// Maneja el click en "Agregar al carrito"
function agregarCurso(e) {
    e.preventDefault(); // Evita recargar la página al hacer click en un <a>

    // Verifica si el click ocurrió en un botón con la clase "agregar-carrito"
    if (e.target.classList.contains('agregar-carrito')) {

        // Subimos dos niveles: botón → info-card → card
        const cursoSeleccionadoCard = e.target.parentElement.parentElement;
        console.log(cursoSeleccionadoCard);

        // Enviamos la card completa a la función que extrae los datos
        leerDatosCurso(cursoSeleccionadoCard);
    }
}

//elimina  curso del carrito
function eliminarCurso(e) {
    //para ver el nombre de la clase y poder identificarla
    //console.log(e.target.classList);    
    if (e.target.classList.contains('borrar-curso')) {
        //para identificar el ID del curso a eliminar
        //console.log(e.target.getAttribute('data-id'));
        const cursoID = e.target.getAttribute('data-id');

        //Eliminar del array por el data-id
        articulosCarrito = articulosCarrito.filter(curso => {
            return curso.id !== cursoID
        });
    }

    carritoHTML();
    console.log(articulosCarrito);


};

//Vaciar carrito de compras
vaciarCarrito.addEventListener('click', () => {
    articulosCarrito = [];
    limpiarHTML();
});



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

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
    console.log(existe);


    //agregando objeto al array
    //verificamos si existe o no el curso
    //lo creamos en caso de q no exista
    if (!existe) {
        articulosCarrito.push(infoCurso);
        console.log(articulosCarrito);
    }
    //Actualizamos la cantidad
    else {
        const cursos = articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }
            else {
                return curso; //retorna los objetos que no son los duplicados
            }
        });
    }
    carritoHTML();
};

//Muestra el carrito de compras en el HTML

function carritoHTML() {

    //Limipiar HTML
    limpiarHTML();

    //Recorre el ARRAY del carrito y genera HTML
    articulosCarrito.forEach(curso => {
        //vamos a aplicar destructuring
        const { imagen, titulo, precio, cantidad, id } = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src = "${imagen}" width = "150">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
             <td>
                <a href ="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>

        `;
        //Agrega el HTML del carrito en el tbody
        contendedorCarrito.appendChild(row);
    })

}


//Elinar los cursos del tbody

function limpiarHTML() {
    //forma lenta
    // contendedorCarrito.innerHTML = '';

    while (contendedorCarrito.firstChild) {
        contendedorCarrito.removeChild(contendedorCarrito.firstChild)
    }
}

