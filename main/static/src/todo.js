window.onload=function()
{
    function fetchTasks(){
        const host = "http://localhost:8000";
        $.ajax({
            url:host+'/api/task/',
            method: 'GET',
            data: {},
            success: function (tasks,status){
                renderTasks(tasks);
                console.log(tasks);
                //printCountTasks(counterField,todoItemCheckbox);
            },
            error: function (response, status){
                console.log(response);
                console.log(status);
            }
            });
    }


    function renderTasks(tasks,status){
        for(let i=0; i < tasks.length; i++) {
            const todoItem = new TodoItem(tasks[i].title, tasks[i].is_active, tasks[i].id);
                todoBody.append(todoItem.getHtmlElement());
                        
        }
    }

   
const addButton=document.getElementsByClassName("search_button")[0]
const inputField=this.document.getElementsByClassName("search_input")[0]
const todoBody=document.getElementsByClassName("todo-app_body")[0]
const todoItemCheckbox = document.getElementsByClassName('todo-item__checkbox');
const counterField = document.getElementsByClassName("menu__counter")[0];
const allFilterButton = document.getElementsByClassName('filter-all')[0];
const activeFilterButton = document.getElementsByClassName('filter-active')[0];
const completedFilterButton = document.getElementsByClassName('filter-completed')[0];
// сonst statusField = document.getElementsByClassName('menu__status')[0];

fetchTasks();

addButton.onclick=()=>{
    const todo  = new TodoItem(inputField.value,true);
    todo.createTodoItem(todoBody);
         
}

}