console.log(1);

// Este código dentro del evento 'DOMContentLoaded' se ejecuta 
// únicamente cuando todo el contenido HTML ha sido completamente cargado,
// pero **antes** de que se carguen completamente los estilos (CSS) o imágenes.
document.addEventListener('DOMContentLoaded', ()=>{
    console.log(2);
});

console.log(3);