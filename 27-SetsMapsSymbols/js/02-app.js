// =====================
// WEAKSET
// =====================

// Es parecido a Set, pero con 2 diferencias importantes:

// ✅ Solo puede almacenar objetos

// ✅ Guarda referencias débiles (weak references)

// 📦 Solo acepta objetos

// Esto funciona:

const ws = new WeakSet();

const obj = { nombre: "Juan" };
ws.add(obj);


// Esto ❌ NO funciona:

ws.add(10);        // Error
ws.add("hola");    // Error


// ⚠️ Limitaciones importantes

// Un WeakSet:

// ❌ No tiene .size

// ❌ No se puede recorrer (forEach, for...of)

// ❌ No puedes ver su contenido

// Solo tiene:

add();
delete();
has();


// 🎯 ¿Para qué sirve entonces?

// Principalmente para:

// Marcar objetos temporalmente

// Evitar memory leaks

// Guardar referencias privadas

// Ejemplo típico:

const vistos = new WeakSet();

function procesar(obj) {
    if (vistos.has(obj)) {
        console.log("Ya fue procesado");
        return;
    }

    vistos.add(obj);
    console.log("Procesando...");
}