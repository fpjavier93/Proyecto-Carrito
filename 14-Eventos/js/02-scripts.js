const nav = document.querySelector('.navegacion');

//registrar un evento
// nav.addEventListener('click', () => {
//  alert('click en nav')
// })

//este evento es para cuando el puntero del mouse entra en el area del elemento seleccionado
// nav.addEventListener('mouseenter', () => {
//  console.log('te colocaste encima de la nav')

//   nav.style.backgroundColor = 'white';
// })


// nav.addEventListener('mouseleave', () => {
//  console.log('saliste de la nav')
//   nav.style.backgroundColor = 'transparent';
// })


//este se activa en el mismo momento que aprietas el boton de click y antes de soltarlo
// nav.addEventListener('mousedown', () => {
//  console.log('saliste de la nav')
//   nav.style.backgroundColor = 'transparent';
// })


nav.addEventListener('dblclick', () => {
 console.log('diste doble click')
  nav.style.backgroundColor = 'transparent'; 
})