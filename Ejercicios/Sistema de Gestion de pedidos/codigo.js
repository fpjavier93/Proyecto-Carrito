"use strict";

const empleados = [
  { nombre: "Ana", salario: 2000, bono: 10 },   // 10% de bono
  { nombre: "Carlos", salario: 2500, bono: 5 },
  { nombre: "María", salario: 1800, bono: 20 },
  { nombre: "Juan", salario: 2200, bono: 0 },
  { nombre: "Sofía", salario: 3000, bono: 15 }
];

const nuevaListaEmpleados = empleados.map (empleado => {
    let calSalario = empleado.salario + (empleado.salario * empleado.bono / 100)
    return {
        nombre: empleado.nombre, salarioFinal: calSalario.toFixed(2)
    }
}
)

console.log(nuevaListaEmpleados);

nuevaListaEmpleados.forEach(empleado =>{
    console.log(`${empleado.nombre} tiene un salario final de ${empleado.salarioFinal}`)
})

//console.log(empleados);