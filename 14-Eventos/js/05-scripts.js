window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);
    if (ubicacion.top < -842) {
        console.log("llegaste al final de la pagina");
    } else{
        console.log('da mas escool')
    }
    
    
});