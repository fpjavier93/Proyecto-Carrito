window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine){
        console.log('Estas con conexion');
    } else{
        console.log('Estas sin conexion');
    }
}
