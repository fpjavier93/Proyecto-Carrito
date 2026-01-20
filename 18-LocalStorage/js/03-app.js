localStorage.removeItem('resultado');
const meses = ["enero", "febrero", "marzo"];

localStorage.setItem('meses', JSON.stringify(meses))

//Actializar registro
const arrayMeses = JSON.parse(localStorage.getItem('meses'))

arrayMeses.push('nuevo mes');

localStorage.setItem('meses', JSON.stringify(arrayMeses));