//el nombre de la variable dentro de {} se puede cambiar, pero sigue teniendo el mismo valor dentro

import nuevaFuncion, { ahorro, nombre, test, Cliente as nuevoClient } from "./app.js";


//heredar de la clase importada

class TipoCliente extends nuevoClient{
    constructor (nombre,ahorro,vip){
        super(nombre,ahorro);
        this.vip = vip;
    }
    esVip(){
        if (this.ahorro > 100) {
            this.vip = true;
            return ('El cliente es Vip');
        }else{
            return ('El cliente no es Vip');
        }
    }

};

const primerCliente = new TipoCliente('Javier',2000);


console.log(primerCliente);
console.log(primerCliente.esVip());

nuevaFuncion();