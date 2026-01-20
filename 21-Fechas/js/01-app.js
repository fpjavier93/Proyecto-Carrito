const diaHoy = new Date();

let año = diaHoy.getFullYear();
let mes = diaHoy.getMonth(); //Enero comienza con 0
let minutos = diaHoy.getMinutes();
let hora = diaHoy.getHours();
let anoModificado = diaHoy.setFullYear(2010);   

console.log(año);
console.log(mes);
console.log(minutos);
console.log(hora);
console.log(anoModificado);