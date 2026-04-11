function crearIterador(carrito) {
    let i = 0;

    return {
        siguiente: () => {
            const fin = (i >= carrito.length)
            const contador = !fin ? carrito[i++] : undefined;
            return { contador, fin }

        }

    }
}


const carrito = ['P1', 'P2', 'P3'];

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

console.log('****************************');
// Generador para carrito de compras
function *generadorCarrito(carrito) {
    
}

const carrito = ['prod1','prod2','prod3']