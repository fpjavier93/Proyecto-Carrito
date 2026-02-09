class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    };
    mostrarInformacion() {
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`;
    }
    //con este no requiero entrar al objeto, puedo entrar por la clase
    static bienvenida1() {
        return 'hola cliente'
    }
};

//Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo) //super le pasa las claves de la clase CLiente
        this.telefono = telefono;
        this.categoria = categoria;
    }
    //va a sustitui en static de la clase padre por la clase hijo
    static bienvenida(){
        return 'holaaaaa desde empresa'
    }
}

class MiniEMpresa extends Empresa {
    constructor(nombre,saldo,telefono,categoria,color){
    super(nombre,saldo,telefono,categoria)
    this.color = color;
}
    
}

const juan = new Cliente('Juan', 25000);

const empresa = new Empresa('ETI', 254, 54898565, 'aprendizaje')
//empresa hereda la las claves de la clase Cliente
console.log(empresa)

//Inlcluso hereda los metodos
console.log(empresa.mostrarInformacion());

const emp = new MiniEMpresa('Aurora', 5000,58458,'azucarera','amarillo');

console.log(emp)
console.log(Cliente.bienvenida1())
console.log(empresa.bienvenida())


