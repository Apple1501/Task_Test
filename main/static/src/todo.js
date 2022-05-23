window.onload = function () {
    const todoItemCheckbox = document.getElementsByClassName('todo-item__checkbox');
    
    function fetchTasks(filter) {
        const host = "http://localhost:8000";
        $.ajax({
            url: host + '/api/task/',
            method: 'GET',
            data: {},
            success: function (tasks, status) {
                renderTasks(tasks, filter);
                printCountTasks();
            },
            error: function (response, status) {
                console.log(response);
                console.log(status);
            }
        });
    }


    function filterTasks(tasks, status) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].is_active == status) {
                const todoItem = new TodoItem(tasks[i].title, tasks[i].is_active, tasks[i].id);
                todoBody.append(todoItem.getHtmlElement());
            }
            if (status == 'nothing') {
                const todoItem = new TodoItem(tasks[i].title, tasks[i].is_active, tasks[i].id);
                todoBody.append(todoItem.getHtmlElement());
            }
        }
    }

    function renderTasks(tasks, filter) {
        switch (filter) {
            case 'completed':
                filterTasks(tasks, false);
                break;
            case 'active':
                filterTasks(tasks, true);
                break;
            case 'all':
                filterTasks(tasks, 'nothing');
                break;
        }
    }

    function countTasks(todoItemCheckboxes){
        let allTasksCount = 0;
        allTasksCount = todoItemCheckboxes.length;
        return allTasksCount
    }

    function printCountTasks(){
        const todoItemCheckbox = document.getElementsByClassName('todo-item__checkbox');
        const counterField = document.getElementsByClassName("menu__counter")[0];
        allTasks = countTasks(todoItemCheckbox);
        counterField.innerText = 'Tasks: '+ allTasks;
 }

function cleanAllTasks() {
    while (todoBody.children.length) {
        todoBody.removeChild(todoBody.children[0])
    }
}

function switchActiveStatus(FilterButton) {
    allFilterButton.classList.remove("active");
    activeFilterButton.classList.remove("active");
    completedFilterButton.classList.remove("active");
    FilterButton.classList.add("active");
    cleanAllTasks();
}
const addButton = document.getElementsByClassName("search_button")[0]
const inputField = this.document.getElementsByClassName("search_input")[0]
const todoBody = document.getElementsByClassName("todo-app_body")[0]
const counterField = document.getElementsByClassName("menu__counter")[0];
const allFilterButton = document.getElementsByClassName('filter-all')[0];
const activeFilterButton = document.getElementsByClassName('filter-active')[0];
const completedFilterButton = document.getElementsByClassName('filter-completed')[0];

fetchTasks('all');


addButton.onclick = () => {
    if (inputField != "") {
        const todo = new TodoItem(inputField.value, true);
        todo.createTodoItem(todoBody);
        inputField.value = "";
    }

}

todoBody.onchange = () => {
    printCountTasks();
}


allFilterButton.onclick = () => {
    switchActiveStatus(allFilterButton);
    fetchTasks('all');
}

activeFilterButton.onclick = () => {
    switchActiveStatus(activeFilterButton);
    fetchTasks('active');

}

completedFilterButton.onclick = () => {
    switchActiveStatus(completedFilterButton);
    fetchTasks('completed');
}

}