
const meses = ['Enero','Febreo', 'Marzo','Abril','Mayo', 'Junio', 'Julio'];


//agregar un elemento al arrays aun cuando la variable esta declarada con const
meses[0] = 'Enero modificado';
meses[2] = 'Marzo modificado';
meses[7] = 'Ultimo mes';
meses[8] = 'Salto';
console.table(meses);
console.log(meses.length);
