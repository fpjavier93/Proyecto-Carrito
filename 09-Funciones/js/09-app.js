!"use strict"

const reproductor = {
    reproducir: function(id) {
        console.log (`Reproduciendo cancion numero ${id}` )
    },
    pausar: function(){
        console.log('pausando...')
    }
}

reproductor.reproducir(20);
reproductor.pausar();


reproductor.borrar = function() {
    console.log(`Borrando...`)
}

reproductor.borrar();

const playlist = {
    cancion1: function(id){
        console.log(`Cancion ${id} agregada con exito`)
    },
    cancion2: function(id){
        console.log(`Cancion ${id} agregada con exito`)
    },
    cancion3: function(id){
        console.log(`Cancion ${id} agregada con exito`)
    }
    }

playlist.cancion1(1);
playlist.cancion1(2);
playlist.cancion1(3);

const crearGeneros = {
    genero: function(id){
        console.log(`Genero ${id} creado...`)
    },
    genero2: function(id){
        console.log(`Genero ${id} creado...`)
    },
};

crearGeneros.genero("Rock");
crearGeneros.genero2("Pop");
playlist;