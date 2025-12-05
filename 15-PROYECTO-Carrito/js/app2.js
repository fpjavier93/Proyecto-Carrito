//guardando en una variable la lista de cursos
const courseList = document.querySelector('#lista-cursos')

//creando el array vacio para almacenar los cursos en el carrito
let cart = []; 

//creando la variable del carrito
const card = document.querySelector('#carrito');
console.log(card)

//creando variable q almacene el  Tbody del carrito
const cartContainer = document.querySelector('#lista-carrito tbody');
console.log(cartContainer);

//creando la variable del boton crear carrito
const borrarCart = document.querySelector(".button");

//listeners
courseList.addEventListener('click', handleAddToCart);
borrarCart.addEventListener('click', ()=>{
    console.log(borrarCart);
    cart = [];
    cleanCart();
} )




function handleAddToCart(e){
if(e.target.classList.contains('agregar-carrito')){

const courseCard = e.target.closest('.card'); // más limpio que parentElement.parentElement
const courseData = {
    imagen: courseCard.querySelector('img').src,
    nombre: courseCard.querySelector('h4').textContent,
    precio: courseCard.querySelector('.precio span').textContent,
    id: courseCard.querySelector('a').getAttribute('data-id'),
    cantidad: 1
};
console.log(cart);

//Validando q existe un curso repetido
const existe = cart.some(course=>course.id === courseData.id);
console.log(existe)

//agregando el objeto seleccionado al array

if (!existe) {
    cart.push(courseData);
} else{
    cart = cart.map((course)=>{
        if (course.id === courseData.id) {
            course.cantidad++;
        }
        return course;
    })
}

//funcion para agragar al carrito HTML, la parte visual
cartHTML(cart);
}
};


//funcion que añade al carrito visual HTML

function cartHTML(){
cleanCart();
    cart.forEach((course)=>{
        
        const {imagen,nombre,precio,cantidad,id} = course;
        const fila = document.createElement('tr');
        fila.innerHTML =`
            <td><img src =  "${imagen}" width = "150"></td>
            <td>${nombre}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href ="#" class="borrar-curso" data-id="${id}"> X </a> </td>
        `;
        
        //Agrega el HTML del carrito en el tbody
        cartContainer.appendChild(fila);
    })
}

//funcion para limpiar el carrito visual
//necesito trabajar con la variable que tiene el tbody del carrito, NO la del array
function cleanCart(){
    while(cartContainer.firstChild){
        cartContainer.removeChild(cartContainer.firstChild)
    }
};

//evento para eliminar del carrito
card.addEventListener('click', deleteCourse);

//funcion para borrar un elemento del carrito
function deleteCourse(e) {
    if (e.target.classList.contains('borrar-curso')) {
        //vamos a guardar el ID del curso seleccionado en una variable
        const courseID = e.target.getAttribute('data-id')

            cart = cart.filter(course=>{
                return course.id !== courseID;
            })
    }   
    cartHTML();
}

//Actualizar la cantidad de elementos en el carrito
function addCourse(course){
    cart = cart.map(course=>{
        course.id
    })

};





