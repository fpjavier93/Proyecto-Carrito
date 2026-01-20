//variables
const formulario = document.querySelector('#cotizar-seguro');

//listener
document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //llena el select con los años
});

formulario.addEventListener('submit', e => {
    e.preventDefault();
    //leer marca seleccionada
    const marca = document.querySelector('#marca').value;
    //leer year seleccionado
    const year = document.querySelector('#year').value;
    //leer cobertura seleccionada
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (marca == '' || year == '' || tipo == '') {
        let smsError = 'los campos deben estar llenos'
        ui.mostrarMensaje(smsError, 'error');
        return;
    } let smsSuccess = 'cargando...'
    ui.mostrarMensaje(smsSuccess, 'correcto');
    //const ui = new Seguro(marca, year, tipo);

    //instanciando seguro
    const secure = new Seguro(marca, year, tipo);
    
    const total = secure.cotizarSeguro();
    ui.mostrarResultado(total, secure);

});

//constructor
function Seguro(marca, year, tipo) {
    this.marca = marca,
        this.year = year,
        this.tipo = tipo
}
//realizando cotizacion con los datos
Seguro.prototype.cotizarSeguro = function () {
    // 1 = Amerciando 1.5
    // 2 = Asiatico 1.05
    // 3 = Europeo 1.35
    //console.log(this.marca);
    let cantidad;
    let base = 2000;
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15
            break;

        case '2':
            cantidad = base * 1.05
            break;

        case '3':
            cantidad = base * 1.35
            break;
        default:
            break;
    }

    //leer el year seleccionado y sacar la diferencia
    let diferencia = new Date().getFullYear() - this.year;
    console.log(diferencia)
    //3% mas barato mientras mas antiguo
    cantidad -= ((diferencia*3) * cantidad) / 100;
if (this.tipo ==='basico') {
    cantidad *= 1.30;
} else{
    cantidad *= 1.50;
}

    return cantidad;
    
};

//creando objeto q sale en la interfaz del usuario
function UI() { };

UI.prototype.llenarOpciones = () => {
    const maxYears = new Date().getFullYear();
    const minYears = maxYears - 20;
    const selectYears = document.querySelector('#year');

    for (let i = maxYears; i > minYears; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.id = i;
        option.textContent = i;
        selectYears.appendChild(option);
    }
};

UI.prototype.mostrarResultado = (total,seguro)=>{
    const result = document.querySelector('#resultado div');
    if (result != null) {
        result.remove();   
    }
    const div = document.createElement('div');
    div.classList.add('mt-10');
    const {marca,year,tipo} = seguro;
    //creando texto HTML
    div.innerHTML = `
    <p class = "header"> TU RESUMEN </p>
    <p class = "font-bold">TOTAL: ${total}</p>
    <p class = "font-bold">Marca: ${marca}</p>
    <p class = "font-bold">Year: ${year}</p>
    <p class = "font-bold">Tipo: ${tipo}</p>
    `;

    const resultado = document.querySelector('#resultado');

    //mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 3000);
};

//mostrar error en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {

    const div = document.createElement('div');
    if (tipo == 'error') {
        //aqui se le esta añadiendo el diseño del sms de error
        div.classList.add('error')
    } else {
        // y aqui el diseño del sms correcto
        div.classList.add('correcto')
    };
    div.classList.add('mensaje', 'mt-10')
    div.textContent = mensaje;
    const formulario = document.querySelector('#cotizar-seguro');

    //insertar el mensaje entre el div cargando y el div resultado.
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }, 3000);

}

//instanciar
const ui = new UI();




