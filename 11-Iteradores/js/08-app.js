"use strict"

const estudiantes = [
  {
    nombre: "Javier",
    calificaciones: {
      matematicas: 8,
      historia: 9,
      biologia: 7
    }
  },
  {
    nombre: "Karla",
    calificaciones: {
      matematicas: 10,
      historia: 7,
      biologia: 8
    }
  },
  {
    nombre: "Yoel",
    calificaciones: {
      matematicas: 6,
      historia: 6,
      biologia: 9
    }
  }
];

console.log("Mostrar los nombres de los estudiantes")

for (const estudiante of estudiantes) {
  console.log(estudiante.nombre)
}


console.log("Mostrá el nombre de cada estudiante y la nota de biología")

for (const estudiante of estudiantes) {
  console.log(estudiante.nombre)
  console.log(estudiante.calificaciones.biologia)
}

console.log("Por cada estudiante, mostrá todas las materias con sus respectivas notas")

for (const estudiante of estudiantes) {
  console.log(estudiante.calificaciones)
}

console.log("Calculá cuántas materias hay en total entre todos los estudiantes (sin repetir estudiantes, ni materias mal contadas).")

let totalMaterias = 0;
for (const estudiante of estudiantes) {
  for (const i in estudiante.calificaciones) {
    totalMaterias++
  }
}
console.log(totalMaterias)

console.log("Mostrá la suma total de todas las notas entre todos los estudiantes")

let sumaNotas = 0;
for (const estudiante of estudiantes) {
  sumaNotas += estudiante.calificaciones.biologia + estudiante.calificaciones.historia + estudiante.calificaciones.matematicas
}


console.log(sumaNotas / estudiantes.length);

console.log("Calculá cuántas materias hay en total entre todos los estudiantes (sin repetir estudiantes, ni materias mal contadas).")

for (const i in estudiantes) {
  console.log(estudiantes[0].calificaciones)
}
