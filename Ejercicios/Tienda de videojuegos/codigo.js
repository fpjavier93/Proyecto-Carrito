"use strict";

//Ejercicio para pintar un cuadrado

// function drawGift(size, symbol) {
//     let gift = [];

//     gift.push(symbol.repeat(size));

//     for (let i = 0; i < size - 2; i++) {
//         gift.push(
//             symbol + ' '.repeat(size - 2) + symbol
//         );

//     }

//     gift.push(symbol.repeat(size));


//     return gift.join('\n')

// }


// console.log(drawGift(8, "*"));

// console.log('************************************************');


let line = '[1++][2-][3+][<]'


function desifratingCode(line) {
    
    let code = [];
    code = line.match(/\[(.*?)\]/g);
    console.log(code);

    for (let i = 0; i < code.length; i++) {
        
        
    }
};

desifratingCode(line);