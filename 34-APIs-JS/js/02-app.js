document.addEventListener('DOMContentLoaded',()=>{

    const obsPremiumn =  new IntersectionObserver( entries => {
        if(entries[0].isIntersecting){
            console.log('esta a la vista Premium')
        } else{
            console.log('Premium esta invisible')
        }
        
    } );

        obsPremiumn.observe(document.querySelector('.premium'))
    })