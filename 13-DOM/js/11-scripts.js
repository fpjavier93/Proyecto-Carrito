const btnFflotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

let num1 = 1;
let num2 = 2;


// btnFflotante.addEventListener('click', ()=>{
//     let resultado = num1 + num2
//     alert(resultado) ;

// });

//otra manera

function mostrarResultado(){
     let resultado = num1 + num2
    alert(resultado) ;
}

btnFflotante.addEventListener('click', mostrarResultado);