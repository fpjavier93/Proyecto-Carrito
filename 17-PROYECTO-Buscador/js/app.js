//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minPrice = document.querySelector('#minimo');
const maxPrice = document.querySelector('#maximo');
const doors = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const result = document.querySelector('#resultado');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//agrupando en un solo array los even Listener
const select = [marca, year, minPrice, maxPrice, doors, transmision, color];

//Contenedor de los resultados


//Generar un objeto

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    showCars(autos); // genera los autos

    fillSelect();




})

//Even listener para los select de busquedas

select.forEach(propiety => {
    propiety.addEventListener('change', fillObject);

});

// marca.addEventListener('change', fillObject);
// year.addEventListener('change', fillObject);
// minPrice.addEventListener('change', fillObject);
// maxPrice.addEventListener('change', fillObject);
// doors.addEventListener('change', fillObject);
// transmision.addEventListener('change', fillObject);
// color.addEventListener('change', fillObject);




//Funciones
function fillObject(e) {
    const { id } = e.target
    datosBusqueda[id] = e.target.value;
    console.log(datosBusqueda);
    const filtro = filterCars(datosBusqueda);
    console.log(filtro);
}

function validateObject(obj) {
    return !Object.values(obj).includes('');
};

function showCars() {
    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const showCar = document.createElement('P');
        showCar.textContent = `
        ${marca} -
        ${modelo} - 
        ${year} -
        ${precio} -
        ${puertas} puertas -
        color: ${color},
        Transmision: ${transmision};              
        `;
        result.appendChild(showCar);
    });
}
//funcion para filtrar
function filterCars() {
    const resultado = autos.filter(filterMarca)
        .filter(filterYear)
        .filter(filterPrecMin)
        .filter(filterPrecMax)
        .filter(filterDoors)
        .filter(filterTrans)
        .filter(filterColor);

    return resultado;
}
        function filterMarca(auto) {

    if (datosBusqueda.marca) { //existe?
        return auto.marca === datosBusqueda.marca; //entonces devuelve true o false
    }
    return true;
};

function filterYear(auto) {
    if (datosBusqueda.year) {
        //es mejor convertir manualmente el string del objeto a numero que poner ==, es mala practica
        //y puede ocacionar bugs.
        return Number(datosBusqueda.year) === auto.year;
    }
    return true;
}

function filterPrecMin(auto) {

    if (datosBusqueda.minimo) {
        return Number(datosBusqueda.minimo) <= auto.precio;
    }
    return true;
};

function filterPrecMax(auto) {

    if (datosBusqueda.maximo) {
        return Number(datosBusqueda.maximo) >= auto.precio;
    }
    return true;
};

function filterDoors(auto) {

    if (datosBusqueda.puertas) {
        return Number(datosBusqueda.puertas) === auto.puertas;
    }
    return true;
};

function filterTrans(auto) {

    if (datosBusqueda.transmision) {
        return datosBusqueda.transmision === auto.transmision;
    }
    return true;
};

function filterColor(auto) {

    if (datosBusqueda.color) {
        return datosBusqueda.color === auto.color;
    }
    return true;
};


//llenar select
function fillSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.id = i;
        option.textContent = i;
        year.appendChild(option);
    }
};
