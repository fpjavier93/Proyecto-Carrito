// const inventario = [
//     { nombre: 'Monitor 27 pulgadas', precio: 500, stock: 3 },
//     { nombre: 'Teclado mecánico', precio: 150, stock: 5 },
//     { nombre: 'Mouse gamer', precio: 60, stock: 10 },
//     { nombre: 'RAM 16GB', precio: 120, stock: 4 },
//     { nombre: 'Tarjeta de video', precio: 900, stock: 2 }

// ];
// let totalPrice = 0;

// inventario.forEach(function (producto) {
//     const {nombre, precio, stock} = producto;
//     totalPrice = precio * stock;
//     console.log(`Producto: ${nombre} - Stock: ${stock} - Precio total: ${totalPrice}`);
// }
// )

// console.log(totalPrice);


// //🧪 Ejercicio: Formatear productos con .map()

// const nuevoArray = inventario.map(function(latiza){
// return 
// }
// )


// let suma = 0;
// suma = 6 + 4;
// suma += 3+2;


// let suma = 0;

// for (let i = 0; i < 10; i++) {
//         let q = i*i;
//         suma += q; 
//         console.log(suma);
// };



//funcion para saber si el numero es primo
// function numeroPrimo(numPrime) {
//     for (let i = 2; i < numPrime; i++) {
//         let divison = numPrime % i;
//         if (divison == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrime(enterprime) {
//     for (let i = 2; i < enterprime; i++) {
//         if (numeroPrimo(i)) {
//             console.log(i);
//         }

//     }

// }


// function mainPrimos() {
//     let enterPrime = prompt('Inserte el numero');
//     printPrime(enterPrime);

// }

// // mainPrimos();
// function mainListaNumeros() {
//     let listaNumeros = [1, 9, 3, 5, 10]
//     let noOrdenada = false;
//     for (let i = 0; i < listaNumeros.length; i++) {
//         if (listaNumeros[i] > listaNumeros[i+1]) {
//             // 0 -> 1           0 + 1 = 1 -> 2
//             //          1 > 2 
//             console.log('no esta ordenada')
//             noOrdenada = true;
//         }
//     }
//     if (noOrdenada == false) {
//         console.log('esta ordenada')
//     }

// }

// mainListaNumeros();

// function calcularFactorial(numero) {
//     let resultado = 1;
//     for (let i = 1; i <= numero; i++) {
//        resultado = resultado * (i);  
//     }
//     return resultado;
// }

// function factorialMain() {
//     let numero = 5;
//     let calculo = calcularFactorial(numero);
//     console.log(`el factorial de ${numero} es ${calculo}`);

// }

// factorialMain();

function mainPalindromo() {
    let palindromo = 'posop';
    let esPalindromo = true;
    console.log(palindromo.length);
    for (let i = 1; i < palindromo.length /2; i++) {
        if (palindromo[i] !== palindromo[palindromo.length -1 -i]) {
            esPalindromo = false;
            break;
        }
    }
    if (esPalindromo == false) {
        console.log("no es palindromo")
    }
    else {
        console.log('es palindromo');
    }
    
}

mainPalindromo();

