"use strict";
//object constructor
function Empty(peso, color, precio) {
    this.peso = parseFloat(peso);
    this.color = color;
    this.precio = parseFloat(precio);
};

let fullList = new Empty(
    prompt('Inserte peso'),
    prompt('Inserte color'),
    prompt('Inserte precio'));

    console.log(fullList);  