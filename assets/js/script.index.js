let title = document.getElementById("new-task").value;
class Task {
    constructor(id, title, status) {
        this.id = id;
        this.tittle = title;
        this.status = status;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task)
    }
}
function randonId() {
    return Math.floor(Math.random() * 9999);
}

const taskList = new TaskList();

function createTask() {
    let title = document.getElementById("new-task")
    let qqNome = new Task(randonId(), title, false)
    TaskList.addTask(qqNome);
    document.getElementById("new-task").value = "";
    showTask();
}

function showTask() {
    let showContent = '';
    taskList.tasks.forEach((task, index) => {
        showContent += `<div id="div3">
        <p id="p1">ㅤ#1</p>
        <div id="div4">
            <button class="icon" id="icon1"><i class="fa-solid fa-check"></i></button>
            <button class="icon" id="icon2" class=""> <i class="fa-solid fa-pen"></i></button>
            <button class="icon" id="icon3"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`;
    }
    )
    document.getElementById("div3").innerHTML = showContent
}

function removeTask(index) {
    taskList.tasks.splice(index, 1);
    showTask();
}