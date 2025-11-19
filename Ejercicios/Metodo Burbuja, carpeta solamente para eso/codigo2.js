"use strict"

function Jugador(nombre, puntaje) {
    this.nombre = nombre;
    this.puntaje = parseFloat(puntaje);
}

let listaJugadores = [];

for (let i = 0; i < 3; i++) {
    let nombre;
    let puntaje;

    do {
        nombre = prompt("Nombre");
        puntaje = parseFloat(prompt("puntaje"));
        if (nombre === "") {
            alert("No puede estar vacio el campo");
        }
        if (puntaje <= 0 || puntaje >= 10) {
            alert("Nota incorrecta");
        }
    } while (nombre === "" || isNaN(puntaje) || puntaje <= 0 || puntaje >= 10);

    let jugador = new Jugador(nombre, puntaje)

    listaJugadores.push(jugador);
}

for (let i = 0; i < listaJugadores.length; i++) {
    for (let j = 0; j < listaJugadores.length - 1 - i; j++) {
        if (listaJugadores[j].puntaje > listaJugadores[j + 1].puntaje) {
            let temp = listaJugadores[j];
            listaJugadores[j] = listaJugadores[j + 1]
            listaJugadores[j + 1] = temp;
        }
    }

}

console.log(listaJugadores);


