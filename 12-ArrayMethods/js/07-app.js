const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ["uno", "dos"];
const meses3 = ["la tiza00"]

//.concat()
let union = meses.concat(meses2,meses3,"otro mes");

console.log(union);

//spread operator
//si creo otro mes con ..., detecta CADA letra como un array
const resultado = [...meses3,...meses2,"otro mes", ..."otro nes"];

console.log(resultado);
 