//hacer privado una clave y valor de la clase

class Cliente {
    #nombre;  //haciendo a la propiedad nombre privado
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;

    };
    mostrarInformacion() {
        return `Cliente: ${this.#nombre} tu saldo es de ${this.saldo}`;
    }
    //con este no requiero entrar al objeto, puedo entrar por la clase
    static bienvenida() {
        return 'holaaaaaaaaa'
    }
};

const javier = new Cliente('javier', 200)

//console.log(javier.#nombre); //da errror solo se puedre mostrar a traves de metodos dentro de la clase

 console.log(javier.mostrarInformacion());