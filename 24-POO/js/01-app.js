//class expresion
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
        
    };
    mostrarInformacion() {
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`;
    }
    //con este no requiero entrar al objeto, puedo entrar por la clase
    static bienvenida(){
        return 'holaaaaaaaaa'
    }
};

const juan = new Cliente('Juan', 25000);

console.log(juan)
console.log(juan.mostrarInformacion())
console.log(Cliente.bienvenida())

//---------------------------------------------------

//class declaration
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    };
}
const juan2 = new Cliente2('Javier',5000);
console.log(juan2)

