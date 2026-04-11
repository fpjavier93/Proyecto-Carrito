document.addEventListener('DOMContentLoaded',()=>{

    const observer =  new IntersectionObserver( entries => {
        if(entries[0].isIntersecting){
            console.log('esta a la vista Premium')
        } else{
            console.log('Premium esta invisible')
        }
        
    } );

        observer.observe(document.querySelector('.premium'))
    })