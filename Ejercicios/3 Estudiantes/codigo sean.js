// Definición de la clase Student (Estudiante) que servirá como plantilla para crear estudiantes
class Student {
    // Declaración de propiedades que tendrá cada estudiante
    nombre;
    edad;
    calif1;
    calif2;
    calif3;
    aprob;

    // Constructor: se ejecuta cuando creamos un nuevo estudiante
    constructor(nombre, edad, calif1, calif2, calif3, aprob) {
        // Asignamos los valores recibidos a las propiedades del estudiante
        this.nombre = nombre
        this.edad = edad
        // Convertimos las calificaciones a números decimales
        this.calif1 = parseFloat(calif1)
        this.calif2 = parseFloat(calif2)
        this.calif3 = parseFloat(calif3)
        this.aprob = aprob
    }

    // Método para calcular el promedio de las tres calificaciones
    promedio() {
        let promedio = (this.calif1 + this.calif2 + this.calif3) / 3;
        return promedio.toFixed(2); // Redondeamos a 2 decimales
    }

    // Método para determinar si el estudiante aprobó (promedio >= 6)
    estadAprov() {
        return this.promedio() >= 6 ? 'aprobado' : 'desaprobado';
    }
}

// Función para mostrar los datos de un estudiante en la consola
function showStudent(student) {
    console.log(student)
}

// Función para pedir los datos de un estudiante al usuario
function pedirDatos() {
    // Solicitamos los datos mediante ventanas emergentes
    let nombre = prompt('Ingrese el nombre').toUpperCase();
    let edad = prompt('Ingrese la edad');
    let calif1 = prompt('Ingrese la calificación 1');
    let calif2 = prompt('Ingrese la calificación 2');
    let calif3 = prompt('Ingrese la calificación 3');

    // Validamos que los datos numéricos sean correctos
    if (isNaN(edad) || isNaN(calif1) || isNaN(calif2) || isNaN(calif3)) {
        alert('Error: Ingresaste un valor no numérico.');
        return null;
    }

    // Creamos y retornamos un nuevo estudiante con los datos ingresados
    return new Student(nombre, edad, calif1, calif2, calif3);
}

// Función principal que ejecuta el programa
function main() {
    // Array para almacenar los estudiantes
    let students = [];
    // Bucle para crear 3 estudiantes
    for (i=0; i < 3; i++) {
        const student = pedirDatos();

        students.push(student) // Agregamos el estudiante al array

        console.log(student); // Mostramos el estudiante en consola
    }

    // Mostramos todos los estudiantes al final
    console.log(students);
};

// Iniciamos la ejecución del programa
main();