const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

//al hacer click en la info o en titulo se va a ctivar 
//el click en card xq estos dos estan dentro de card
//esto se llama event boobling
// cardDiv.addEventListener('click', ()=>{
//     console.log('click en card')
// })

// infoDiv.addEventListener('click', ()=>{
//     console.log('click en info')
// })

// titulo.addEventListener('click', ()=>{
//     console.log('click en titulo')
// })


//corregirlo
cardDiv.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click en card')
})

infoDiv.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click en info')
})

titulo.addEventListener('click', (e)=>{
    e.stopPropagation()
    console.log('click en titulo')
})


