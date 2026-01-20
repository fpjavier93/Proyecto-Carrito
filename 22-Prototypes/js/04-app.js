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

Cliente.prototype.retirarSaldo = function (saldoARetirar) {
    // this.saldo -= this.saldo - saldo
    // es lo mismo
    this.saldo -= saldoARetirar;
}

//Heredar prototype

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);//aqui estoy heredando las claves y valor del constructos CLientes
    this.telefono = telefono;
}
//pasarle los prototypes de Clientes a Persona, son los metodos creados.
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

let nuevaPersona = new Persona('javier',500,2057492);

//ahora puedo usar las funciones exclusivas de  --retirarSaldo-- en -nuevaPersona-
nuevaPersona.retirarSaldo(100);
console.log(nuevaPersona);

//pasar una funcion explusica a Clientes de Persona

Persona.prototype.mostrarTelefono = function () {
    return `${this.telefono}`;
}

console.log(nuevaPersona.mostrarTelefono());
