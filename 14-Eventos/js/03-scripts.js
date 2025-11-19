// Selecciona el elemento del DOM con la clase .busqueda
const busqueda = document.querySelector('.busqueda');

// ------------------------------------------------------
// 1️⃣ keydown
// Se ejecuta justo cuando PRESIONAS una tecla (⬇️).
// Ocurre incluso antes de que se actualice el texto en el input.
// Ideal para detectar que el usuario comenzó a escribir, o
// para evitar que se escriban ciertas teclas.
 
// busqueda.addEventListener('keydown', ()=>{
//     console.log('presionaste una tecla');
// })

// ------------------------------------------------------
// 2️⃣ keyup
// Se ejecuta cuando SUELTAS una tecla (⬆️).
// Aquí el valor del input ya se actualizó.
// Útil si querés mostrar el texto que se escribió o validar al final de la pulsación.
 
// busqueda.addEventListener('keyup', ()=>{
//     console.log('soltaste una tecla');
// })

// ------------------------------------------------------
// 3️⃣ blur
// Se ejecuta cuando el input PIERDE el foco (cuando haces clic fuera de él).
// Muy útil para validar un campo después de escribir, por ejemplo, un email.
 
// busqueda.addEventListener('blur', ()=>{
//     console.log('saliste del input');
// })

// ------------------------------------------------------
// 4️⃣ copy
// Se ejecuta cuando el usuario COPIA texto desde el input (Ctrl + C o clic derecho → copiar).
// Puedes usarlo para impedir copias o simplemente registrar la acción.
 
// busqueda.addEventListener('copy', ()=>{
//     console.log('copiaste texto');
// })

// ------------------------------------------------------
// 5️⃣ paste
// Se ejecuta cuando el usuario PEGA texto en el input (Ctrl + V o clic derecho → pegar).
// Sirve para validar o limpiar el texto pegado antes de procesarlo.
 
// busqueda.addEventListener('paste', ()=>{
//     console.log('pegaste texto');
// })

// ------------------------------------------------------
// 6️⃣ input
// Este evento se dispara cada vez que el contenido del input CAMBIA,
// ya sea al escribir, borrar, pegar, o cortar texto.
// Es el más recomendado para escuchar cambios de texto en tiempo real.
 
// busqueda.addEventListener('input', ()=>{
//     console.log('el texto cambió');
// })

// ------------------------------------------------------
// 7️⃣ Obteniendo información del evento
// Al escuchar el evento, puedes capturar el objeto del evento (e),
// que contiene muchos datos útiles: tipo de evento, elemento que lo generó, etc.
 
// busqueda.addEventListener('input', (e)=>{
//     console.log(e);          // Muestra todo el objeto del evento (muchos datos)
// })

// busqueda.addEventListener('input', (e)=>{
//     console.log(e.type);     // Muestra el tipo de evento, en este caso 'input'
// })

// busqueda.addEventListener('input', (e)=>{
//     console.log(e.target);   // Muestra el elemento que generó el evento (el input mismo)
// })

// ------------------------------------------------------
// 8️⃣ Mostrar el valor actual del input
// e.target.value devuelve lo que el usuario ha escrito dentro del input.
// Es la forma más común de obtener texto de un campo.
busqueda.addEventListener('input', (e)=>{
    console.log(e.target.value);
})
