//agregar elementos al localStorage
//los datos guardados aqui se mantienen aunnq apagues la pc
localStorage.setItem('nombre','Javier');

//agregar elementos en sessionStorage
//los datos se pierden una vez cierres el navegador
sessionStorage.setItem('nombre', 'Karla');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300,
};
console.log(producto);


//convertir todo el objeto en un string

const productoString = JSON.stringify(producto);
console.log(productoString);    

localStorage.setItem('nombre',`${productoString}`);

const meses = ["enero", "febrero", "marzo"];
//convertir directamente a string
localStorage.setItem('meses', JSON.stringify(meses));