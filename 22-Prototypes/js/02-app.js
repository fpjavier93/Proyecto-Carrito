function Cliente(nombre, saldo, sexo) {
    this.nombre = nombre,
    this.saldo = saldo,
    this.sexo = sexo;
};

const cliente1 = new Cliente('Javier', 1000, 'M');

function formatClient(cliente) {
    const {nombre,saldo} = cliente1;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function Empresa(nombre, categoria, numero) {
    this.nombre = nombre,
    this.categoria = categoria,
    this.numero = numero;
};

const emp = new Empresa('ETI', 'Informatica', 325);

function formatEmpresa(empresa) {
    const {nombre,categoria, numero} = emp;
    return `La empresa ${nombre} pertenece a ${categoria},y su numero es ${numero}`;
}

console.log(formatClient(cliente1));

console.log(formatEmpresa(emp));