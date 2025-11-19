"use strict";

// funcion object constructor
function DatStudent1(nombre, edad, calif1, calif2, calif3, aprob) {
    this.nombre = nombre;
    this.edad = parseFloat(edad);
    this.calif1 = parseFloat(calif1);
    this.calif2 = parseFloat(calif2);
    this.calif3 = parseFloat(calif3);
    this.aprob = aprob;
};

function DatStudent2(nombre, edad, calif1, calif2, calif3, aprob) {
    this.nombre = nombre;
    this.edad = parseFloat(edad);
    this.calif1 = parseFloat(calif1);
    this.calif2 = parseFloat(calif2);
    this.calif3 = parseFloat(calif3);
    this.aprob = aprob
};

function DatStudent3(nombre, edad, calif1, calif2, calif3, aprob) {
    this.nombre = nombre;
    this.edad = parseFloat(edad);
    this.calif1 = parseFloat(calif1);
    this.calif2 = parseFloat(calif2);
    this.calif3 = parseFloat(calif3);
    this.aprob = aprob
};

//funcion para calcular el promedio
function promedio(calif1, calif2, calif3) {
    let promedio = (calif1 + calif2 + calif3) / 3;
    return promedio.toFixed(2);
};

//funcion para determinar si el estudiante aprobo o desaprobo
function estadAprov(promedio) {
    return promedio >= 6 ? 'aprobado' : 'desaprobado';
};

//function que describe al estudiante
function student1(nombre, edad, promedio, estadAprov) {
    alert(`${nombre}, de ${edad} años, obtuvo un promedio de ${promedio}, y esta ${estadAprov}`);
};

function student2(nombre, edad, promedio, estadAprov) {
    alert(`${nombre}, de ${edad} años, obtuvo un promedio de ${promedio}, y esta ${estadAprov}`);
};

function student3(nombre, edad, promedio, estadAprov) {
    alert(`${nombre}, de ${edad} años, obtuvo un promedio de ${promedio}, y esta ${estadAprov}`);
};

function main() {
    let datastudent1 = new DatStudent1(
        prompt('Ingrese el nombre').toUpperCase(),
        prompt('Ingrese la edad'),
        prompt('Ingrese la calificacion 1'),
        prompt('Ingrese la calificacion 2'),
        prompt('Ingrese la calificacion 3'),
    )
    console.log(datastudent1);

    if (isNaN(datastudent1.edad) || isNaN(datastudent1.calif1) || isNaN(datastudent1.calif2) || isNaN(datastudent1.calif3)) {
        alert('lo rompiste');
        return;
    }

    let datastudent2 = new DatStudent2(
        prompt('Ingrese el nombre').toUpperCase(),
        prompt('Ingrese la edad'),
        prompt('Ingrese la calificacion 1'),
        prompt('Ingrese la calificacion 2'),
        prompt('Ingrese la calificacion 3'),
    )
    if (isNaN(datastudent2.edad) || isNaN(datastudent2.calif1) || isNaN(datastudent2.calif2) || isNaN(datastudent2.calif3)) {
        alert('lo rompiste');
        return;
    };
    let datastudent3 = new DatStudent3(
        prompt('Ingrese el nombre').toUpperCase(),
        prompt('Ingrese la edad'),
        prompt('Ingrese la calificacion 1'),
        prompt('Ingrese la calificacion 2'),
        prompt('Ingrese la calificacion 3'),
    )

    if (isNaN(datastudent3.edad) || isNaN(datastudent3.calif1) || isNaN(datastudent3.calif2) || isNaN(datastudent3.calif3)) {
        alert('lo rompiste');
        return;
    };
    console.log(datastudent1);
    console.log(datastudent2);
    console.log(datastudent3);


    //codigo preferente al estudiante 1
    let student1Prom = promedio(datastudent1.calif1, datastudent1.calif2, datastudent1.calif3);
    let statusAprov1 = estadAprov(student1Prom);
    student1(datastudent1.nombre, datastudent1.edad, student1Prom, statusAprov1);

    //codigo preferente al estudiante 2
    let student2Prom = promedio(datastudent2.calif1, datastudent2.calif2, datastudent2.calif3);
    let statusAprov2 = estadAprov(student2Prom);
    student2(datastudent2.nombre, datastudent2.edad, student2Prom, statusAprov2);

    //codigo preferente al estudiante 3
    let student3Prom = promedio(datastudent3.calif1, datastudent3.calif2, datastudent3.calif3);
    let statusAprov3 = estadAprov(student3Prom);
    student3(datastudent3.nombre, datastudent3.edad, student3Prom, statusAprov3);

};

function a(params) {
    console.log(params);
    alert(asd)
}

main();