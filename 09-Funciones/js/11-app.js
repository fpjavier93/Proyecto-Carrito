//Arrow function

const aprendiendo = function(){
    console.log('aprendiendo Java Script');
}



//transformando a Arrow function
const aprendiendo2 = nombre => `aprendiendo Java Script con ${nombre}`;
//los parentesis para poner los aprametros son opcionales


//para agragar mas de un parametro, colocar parentesis
//para agregarle un valor por defecto al porametro tengo q colocar parenteis obligatorios
const aprendiendo3 = (nombre, apellido) => `aprendiendo Java Script con ${nombre} ${apellido}`;


aprendiendo();
console.log(aprendiendo2("Javier"));
console.log(aprendiendo3("Karla", "Simon"));
