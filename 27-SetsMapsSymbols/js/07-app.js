// Generador es una funcion q retorna un iterador

function *crearGenerador() {
    yield 1;
    yield 'Javier';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

console.log('****************************');
// Generador para carrito de compras
function *generadorCarrito(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];        
    }
}

const carrito = ['prod1','prod2','prod3'];

const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next().value);
console.log(iteradorCarrito.next().value);
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());


function* nivelDios() {
  const a = yield 5;
  yield a + 2;
  const b = yield a * 3;
  yield b - 1;
  return a + b;
}

const g = nivelDios();

console.log(g.next()); // {value:5 , done: false}
console.log(g.next(4)); // a = 4, pero se pierde el valor xq no se guarda en variable
console.log(g.next(10)); // {value:30 , done: false} b = 30
console.log(g.next(20)); // yield = 29, se pierde el valor
console.log(g.next(30)); // 34