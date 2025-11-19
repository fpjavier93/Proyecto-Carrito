//const encabezado = document.querySelector('.contenido-hero h1')
//console.log(encabezado)

// console.log(encabezado.innerText); //si en el CSS visibility es hidden, entonces no lo va a encontrar
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML); //se trae el html
// tambien se puede sacar asi
const encabezado = document.querySelector('.contenido-hero h1').textContent
console.log(encabezado)


let nuevoHeading = 'hoila'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//modificar una imagen

const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'