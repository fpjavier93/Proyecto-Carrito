let tasks = [1,2,3,4,5,6,7,8,9,10];

// const addTask = task => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (task) {
//             tasks.push(task);
//             resolve(`Tarea ${task} agregada`);
//         } else {
//             reject('No se agrego tarea');
//         }

//     }, 2000);
// });

// function showTask() {
//     setTimeout(() => {
//         console.log(tasks);
//     }, 1000);
// };

// addTask('Comer')
//     .then(result => {
//         console.log(result);
//         return addTask()
//     })
//     .catch(error => {
//         console.log(error);
//         return 'Error manejado';
//     })
//     .then(result => {
//         console.log(result);
//         return addTask('Dormir')
//     })
//     .then(result => {
//         console.log(result);
//         return addTask()
//     }).then(result=>{
//         showTask();
//     })
//     .catch(error=>{
//         console.log(error);
//         showTask()
//     });

let par =[];
for (const task of tasks) {
    if (task%2 !== 0) {
        par.push(task)
    }   
}

console.log(par);
