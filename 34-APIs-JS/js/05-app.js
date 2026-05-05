
document.addEventListener('visibilitychange', () =>{

if(document.visibilityState === 'hidden'){
    console.log('Pausando video');
} else{
    console.log('Reanudando video');
}
})