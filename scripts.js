const Tasks = [
    {
        text: "aaa",
    },
    {
        text: "aaa1",
    },
    {
        text: "aaa2",
    },
    {
        text: "aaa3",
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
    }
}

const DOM = {
    taskContainer: document.querySelector('.tasks-box'),

    taskHTML(task, index){
        const html = 
        `
        <div class="task">
            <input type="checkbox" name="done" onChange="Utils.lineThrough(this)"/>
            <p class="text-task ">${task.text}</p>         
            <button type="submit" class="remove-task" id="remove-task" onClick="TaskFunctions.removeTask(${index}"><img src="./assets/icon_remove-task.svg" /></button>
        </div>
        <hr>
        `
        return html;
    },

    addHTMLTask(task, index){
        const div = document.createElement('div');
        div.innerHTML = DOM.taskHTML(task, index);

        DOM.taskContainer.appendChild(div);
    }
}

const Form = {
    text: document.querySelector('input#text'),

    getValue(){
        return {
            text: Form.text.value
        }
    },

    submit(event){
        event.preventDefault();

        try{
            const task = Form.getValue();
            console.log(task);

            TaskFunctions.addTask(task);
        }catch(e){
            alert(e.message);
        }
    }
}


{/* <div class="task">
<input type="checkbox" name="done" onChange="Utils.lineThrough(this)"/>
<p class="text-task ">${task.text}</p>         
<button type="submit" class="remove-task" id="remove-task" onClick="Task.remove(${index}"><img src="./assets/icon_remove-task.svg" /></button>
</div>
<hr> */}

console.log(Tasks);
