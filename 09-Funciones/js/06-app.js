//parametros por defaulto
//Aqui en caso de que no tenga la funcion un parametro introducido ella coge ""
function saludar(nombre,apellidos = "") {
        console.log(`Hola ${nombre} ${apellidos}`);
}

saludar('Javier',);


//En este caso no usa el valor por defecto xq se introduce el apellido
 function saludar2(nombre,apellidos = "") {
        console.log(`Hola ${nombre} ${apellidos}`);
}

saludar2('Javier','Fonseca');