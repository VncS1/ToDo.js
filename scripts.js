const Tasks = [
    {
        text: "xx",
        id: 0
    },
]

const Utils = {
    lineThrough(checkbox){
        const task = document.querySelector(".text-task");
        if(checkbox.checked) {
            task.classList.add('task-done');
        }else if(!checkbox.checked) {
            task.classList.remove('task-done');
        }
    }
}

const TaskFunctions = {
    addTask(task){
        Tasks.push(task);
    },

    removeTask(index){


        Tasks.splice(index, 1);
    },

    getTaskIndex(){



    }
}

const DOM = {
    taskContainer: document.querySelector('.tasks-list'),
    
    addHtmlTask(task){
        const container = DOM.taskContainer;

        const htmlT = DOM.htmlTask(task);

        container.insertAdjacentHTML('beforeEnd', htmlT);
    },

    htmlTask(task){
        const html = 
        `
        <div class="task">
            <input type="checkbox" name="done" onChange="Utils.lineThrough(this)"/>
            <p class="text-task ">${task.text}</p>         
            <button type="submit" class="remove-task" id="remove-task" onClick="TaskFunctions.getTaskIndex()">
                <img src="./assets/icon_remove-task.svg" />
            </button>
        </div>
        <hr>
        `

        return html;
    }
}

const Form = {
    text: document.querySelector('.input-task'),

    getValue(){
        if(Form.text.value !== ""){
            return {
                text: Form.text.value,
            }
        }else {
            alert("Por favor, preencha o nome da tarefa.");
            
        }
    },

    clearField(){
        Form.text.value = "";
    },

    submit(event){
        event.preventDefault();

        try{

            let text = Form.getValue();

            DOM.addHtmlTask(text);

            Form.clearField();


        }catch(e){
            console.log(e.message);
        }
    }
}

TaskFunctions.addTask({text: "xx", id: Tasks.length});
TaskFunctions.addTask({text: "xx", id: Tasks.length});
TaskFunctions.addTask({text: "xx", id: Tasks.length});
TaskFunctions.addTask({text: "xx", id: Tasks.length});
TaskFunctions.addTask({text: "xx", id: Tasks.length});

TaskFunctions.removeTask(3);

TaskFunctions.addTask({text: "xx"});



console.log(Tasks);

// {
//     text: "aaa",
//     id: 0
// },
// {
//     text: "aaa1",
//     id: 1
// },
// {
//     text: "aaa2",
//     id: 2
// },