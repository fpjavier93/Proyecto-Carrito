const clients = [];

function Cliente(nombre, saldo, sexo) {
    this.nombre = nombre,
    this.saldo = saldo,
    this.sexo = sexo;
};

const cliente1 = new Cliente('Javier', 1000, 'M');


clients.push(cliente1);

const cliente2 = new Cliente('Karla', 2000000, 'F');

clients.push(cliente2);

console.log(clients);