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
            const todoItem = new TodoItem(tasks[i].title);
                todoBody.append(todoItem.getHtmlElement());
            
            
        }
    }

    // fetchTasks()

const addButton=document.getElementsByClassName("search_button")[0]
const inputFields=this.document.getElementsByClassName("search_input")[0]
const todoBody=document.getElementsByClassName("todo-app_body")[0]

fetchTasks();

addButton.onclick=()=>{
    // const todo=new TodoItem(inputFields.value)
    // todoBody.append(todo.getHtmlElement())

    // const host = "http://localhost:8000";
    //     $.ajax({
    //         url:host+'/api/task/',
    //         method: 'GET',
    //         data: {},
    //         success: function (response,status){
    //             console.log(response);
    //             console.log(status);
    //             // printCountTasks(counterField,todoItemCheckbox);
    //         },
    //         error: function (response, status){
    //             console.log(response);
    //             console.log(status);
    //         }
    //         });

}

}