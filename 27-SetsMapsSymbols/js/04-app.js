// =====================
// weak maps
// =====================
// 🧠 ¿Qué es un WeakMap?

// Es como un Map, pero con 2 diferencias clave:

// 1️⃣ Solo acepta objetos como claves
// 2️⃣ Guarda las claves con referencia débil (weak reference)

// 🟢 Sintaxis básica
const wm = new WeakMap();

const usuario = { nombre: "Juan" };

wm.set(usuario, "Admin");

console.log(wm.get(usuario)); // "Admin"

// ❗ Solo objetos como clave

// Esto funciona:

wm.set({id:1}, "dato");


// Esto ❌ NO funciona:

wm.set("id", "dato");  // Error
wm.set(1, "dato");     // Error


// Las claves deben ser objetos.

// 🧠 ¿Qué significa “referencia débil”?

// Si el objeto clave deja de existir en el programa, el garbage collector lo elimina automáticamente del WeakMap.

// Ejemplo conceptual:

let usuario = { nombre: "Juan" };

wm.set(usuario, "Admin");

usuario = null; 


// Ahora el objeto puede ser eliminado de memoria, y el WeakMap también lo pierde.

// En un Map normal eso no pasaría.