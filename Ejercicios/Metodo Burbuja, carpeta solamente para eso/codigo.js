"use strict"

let numeros = [10, 5, 7, 9, 1, 3, 4, 6, 2, 8];

//Metodo burbuja para ordenar un array de menos a mas

// for (let i = 0; i < numeros.length; i++) {
//   for (let j = 0; j < numeros.length - 1; j++) {
//     if (numeros[j] > numeros[j + 1]) {
//       let temp = numeros[j];
//       numeros[j] = numeros[j + 1];
//       numeros[j + 1] = temp;
//     }

//   }
//   console.log(numeros);
// }

//Mas optimizado con flags

for (let i = 0; i < numeros.length; i++) {
  let numeroMayor = false;
  for (let j = 0; j < numeros.length - 1 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      let temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
      numeroMayor = true;
    }
  }
if (!numeroMayor) {
  break;
}

}
console.log('*******Optimizado*******');
console.log(numeros);

