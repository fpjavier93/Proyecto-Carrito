const cardDiv = document.querySelector('.card');
const titulo = document.querySelector('.titulo');

//prevenir bubbling con delegation
cardDiv.addEventListener('click', (e)=>{
    console.log(e.target.classList);
    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo')
    }
    if(e.target.classList.contains('concierto')){
        console.log('Diste click en concienrto')
    }


})

