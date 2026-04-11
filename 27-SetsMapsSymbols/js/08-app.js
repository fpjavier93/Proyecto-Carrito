// Iteradores

const ciudades = ['Londres', 'New York', 'Paris', 'Madrid'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('nombre', 'Javier');
datos.set('profesion','programador');


console.log('**********Default')
//Default
for(let ciudad of datos){
    console.log(ciudad);
}

for(let orden of ordenes){
    console.log(orden);
}

for(let dato of datos){
    console.log(dato);
}


console.log('**********Keys Iterator')
//Keys Iterator

for(let value of ciudades.keys()){
    console.log(value);
}

for(let value of ordenes.keys()){
    console.log(value);
}

for(let value of datos.keys()){
    console.log(value);
}

console.log('************Values Iterator')
//Values Iterator
for(let value of ciudades.values()){
    console.log(value);
}

for(let value of ordenes.values()){
    console.log(value);
}

for(let value of datos.values()){
    console.log(value);
}

console.log('************Entries iterator')
//Entries iterator
for (const entry of ciudades.entries()) {
    console.log(entry);      
}

for (const entry of ordenes.entries()) {
    console.log(entry);      
}

for (const entry of datos.entries()) {
    console.log(entry);      
}