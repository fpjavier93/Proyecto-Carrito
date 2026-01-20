function Cliente(nombre, saldo) {
    this.nombre = nombre,
        this.saldo = saldo;
};

const first = new Cliente('javier', 100000);

//constriyendo un prototoipo
//va a pasar a ser un metodo del object constructor especifico, en este caso -Cliente-
Cliente.prototype.tipoCliente = function () {
    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Gold';
    }
    else if (this.saldo > 5000) {
        tipo = 'Platinum';

    } else {
        tipo = 'Normal'

    }
    return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
    return `nombre: ${this.nombre}, saldo: ${this.saldo}, tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retirarSaldo = function (saldoARetirar){
    // this.saldo -= this.saldo - saldo
    // es lo mismo
    this.saldo -= saldoARetirar;
}

first.retirarSaldo(1000);

console.log(first); console.log('********************');

console.log(first.tipoCliente());

console.log(first.nombreClienteSaldo());

// console.log(first);console.log('********************');
// //el anterior prototipe no funciona con este object constructor -Empresa-
// function Empresa(nombre, categoria, numero) {
//     this.nombre = nombre,
//     this.categoria = categoria,
//     this.numero = numero;
// };

// const emp = new Empresa('ETI', 'Informatica', 325);
// console.log(emp);