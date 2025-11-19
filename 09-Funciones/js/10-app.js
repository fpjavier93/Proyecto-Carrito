//Arrow function

const aprendiendo = function(){
    console.log('aprendiendo Java Script');
}


//transformando a Arrow function
const aprendiendo2 = (nombre = "Sin nombre") => `aprendiendo Java Script con ${nombre}`;

aprendiendo();
console.log(aprendiendo2("Javier"));

