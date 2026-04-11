let editando = {value: false};

import { generarId } from "./funciones.js";

// Objeto de Cita
const citaObj = {
    id: generarId(),  
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export{editando,citaObj};

