"use strict";

// Constructor único para estudiantes
function Student(nombre, edad, calif1, calif2, calif3) {
    this.nombre = nombre;
    this.edad = parseFloat(edad);
    this.calif1 = parseFloat(calif1);
    this.calif2 = parseFloat(calif2);
    this.calif3 = parseFloat(calif3);
    this.promedio = calcularPromedio(this.calif1, this.calif2, this.calif3);
    this.aprob = estadoAprobado(this.promedio);
}

// Función para calcular promedio
function calcularPromedio(calif1, calif2, calif3) {
    return ((calif1 + calif2 + calif3) / 3).toFixed(2);
}

// Función para determinar si aprobó o no
function estadoAprobado(promedio) {
    return promedio >= 6 ? 'aprobado' : 'desaprobado';
}

// Función para mostrar datos del estudiante
function mostrarEstudiante(estudiante) {
    alert(`${estudiante.nombre}, de ${estudiante.edad} años, obtuvo un promedio de ${estudiante.promedio}, y está ${estudiante.aprob}.`);
}

// Función para pedir datos y crear un estudiante
function pedirDatos() {
    let nombre = prompt('Ingrese el nombre').toUpperCase();
    let edad = prompt('Ingrese la edad');
    let calif1 = prompt('Ingrese la calificación 1');
    let calif2 = prompt('Ingrese la calificación 2');
    let calif3 = prompt('Ingrese la calificación 3');

    // Verifica si los valores ingresados son válidos
    if (isNaN(edad) || isNaN(calif1) || isNaN(calif2) || isNaN(calif3)) {
        alert('Error: Ingresaste un valor no numérico.');
        return null;
    }

    return new Student(nombre, edad, calif1, calif2, calif3);
}

function main() {
    let estudiantes = [];

    // Pedir datos para tres estudiantes
    for (let i = 0; i < 3; i++) {
        let estudiante = pedirDatos();
        if (estudiante) {
            estudiantes.push(estudiante);
        } else {
            return; // Si hay un error, se detiene la ejecución
        }
    }

    // Mostrar resultados
    estudiantes.forEach(mostrarEstudiante);

    // Mostrar datos en la consola
    console.log(estudiantes);
}

main();
