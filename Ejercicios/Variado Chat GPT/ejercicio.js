class User {
    constructor(name, email, active = true) {
        this.name = name;
        this.email = email;
        this.active = active;
    }
    deactivate() {
        this.active = false;
    }
    activate(){
        this.active = true;
    }
    getInfo(){
       const getInfo = `Usuario: ${this.name} | Email: ${this.email} | Activo: ${this.active}`
       return getInfo;
    }
}

//Usuario activo
const usuario = new User('Javier', 'fpjavier93@gmail.com');

console.log(usuario.getInfo());

//Usuario inactivo
const usuario2 = new User('Javier', 'fpjavier93@gmail.com');

usuario2.deactivate();

console.log(usuario2.getInfo());

const showInfo = usuario.getInfo.bind(usuario);
console.log(showInfo());



function saludox() {
    return 'Holaaaaa'
}

const saludiss = saludox;

console.log(saludiss());