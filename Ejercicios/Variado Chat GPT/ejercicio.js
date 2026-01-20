let tasks = [];
let idCounter = 0;
//Creando object constructor
function TaskObject(title) {
    this.id = Date.now() + idCounter++,//asi garantizo q los ID sean unicos
        this.title = title,
        this.completed = false;
};

//funciones
function addTask(title) {
    if (title.trim() === '') {
        return;
    }
    const task = new TaskObject(title)
    tasks.push(task)

};

function listarTareas() {
    tasks.forEach(task => {
        console.log(
            task.completed ? `[x]${objtask.title}` : `[ ]${objtask.title}`
        )
    })
}



function completarTarea(tareaCompletar) {
    let findTask = tasks.find((task) => {
        return task.title == tareaCompletar;
    });
    if (!findTask) {
        return 'la tarea no existe'
    }
    findTask.completed = true;
    return findTask;

}
function deleteTask(taskDeleted) {
    tasks = tasks.filter((task) => task.title != taskDeleted);
    return tasks;
}

//llamando funciones
addTask('',);
addTask('Estudiar');
addTask('Jugar');
addTask('Comer');
addTask('Dormir');

console.log('1-Mostrando el array de objetos');
console.log(tasks);
console.log('2-Mostrando las tareas');
listarTareas()
console.log('3-Completar tarea');
console.log(completarTarea('Comer'));
console.log(completarTarea('dsd'));
listarTareas();
console.log('4-Borrar tarea');
console.log(deleteTask('Dormir'));
listarTareas()




