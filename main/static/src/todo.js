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
                // printCountTasks(counterField,todoItemCheckbox);
            },
            error: function (response, status){
                console.log(response);
                console.log(status);
            }
            });
    }


    function renderTasks(tasks,status){
        for(let i=0; i < tasks.length; i++) {
            const todoItem = new TodoItem(tasks[i].title,tasks[i].id);
                todoBody.append(todoItem.getHtmlElement());
                        
        }
    }

   
const addButton=document.getElementsByClassName("search_button")[0]
const inputField=this.document.getElementsByClassName("search_input")[0]
const todoBody=document.getElementsByClassName("todo-app_body")[0]

fetchTasks();

addButton.onclick=()=>{
    const todo  = new TodoItem(inputField.value);
    debugger
    todo.createTodoItem(todoBody);
     

}

}