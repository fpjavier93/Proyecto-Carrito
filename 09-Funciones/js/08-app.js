function  sumar(a,b) {
    return a + b;
}

const suma = sumar(2,3);

console.log(suma);

//Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio ) {
    return total += precio;
}


total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(200);

function calcularImpuesto(total) {
    return total * 1.15;
}
const totalConImpuestos = calcularImpuesto(total);

console.log(total);
console.log(`El total a pagar es de ${totalConImpuestos}`);