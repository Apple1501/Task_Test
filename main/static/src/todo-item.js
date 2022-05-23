function countTasks(){
    const todoItemCheckbox = document.getElementsByClassName('todo-item__checkbox');
    let allTasksCount = 0;
    allTasksCount = todoItemCheckbox.length;
    return allTasksCount
}

function printCountTasks(){
    const counterField = document.getElementsByClassName("menu__counter")[0];
    allTasks = countTasks();
    counterField.innerText = 'Tasks: '+ allTasks;
}

class TodoItem{
    constructor(title,isActive,id)
    {
        this.title=title;
        this.is_active = isActive;
        this.__id = id;
        this.__host = "http://localhost:8000";
    }

__createHtmlElement()
{
    const div=document.createElement('div')
    div.className="todo-app_item todo-item"

    const checkboxInput = document.createElement("input");
    checkboxInput.className = "todo-item__checkbox";
    checkboxInput.type = "checkbox";
    checkboxInput.checked = !this.is_active;

    const titleSpan=document.createElement('span')
    titleSpan.className="todo-item_text";
    titleSpan.innerText=this.title;

    const deleteSpan=document.createElement('span')
    deleteSpan.className="todo-item_delete";
    deleteSpan.innerText='x';

    div.append(checkboxInput,titleSpan,deleteSpan)

    this.htmlElement=div;

    deleteSpan.onclick=this.remove.bind(this);
    checkboxInput.onclick = this.changeTaskStatus.bind(this);

}

createTodoItem(body){
    this.__sendCreateRequest(body);
}

__sendCreateRequest(body){
    const title = this.title;
    $.ajax({
        url:this.__host+'/api/task/',
        method: 'POST',
        data: {
            title: this.title,
            description: 'empty',
            is_active: true
        },
        success: (response) => {
            debugger
            this.__id=response
            body.append(this.getHtmlElement());
            printCountTasks();
        },
        error: function (response, status){
            debugger
            console.log(response);
            console.log(status);
        }
        });
}

getHtmlElement()
{
    this.__createHtmlElement()
    return this.htmlElement;
        
}

remove(){
    this.__sendDeleteRequest();
}
__sendDeleteRequest(){
    const title = this.title;
    $.ajax({
        url:this.__host+'/api/task/'+this.__id+"/",
        method: 'DELETE',
        data: {},
        success: (tasks,status) => {
            this.htmlElement.remove();
            printCountTasks();
        },
        error: function (response, status){
            console.log(response);
            console.log(status);
        }
        });
}

changeTaskStatus(){
    this.__sendChangeStatusRequest();
}

__sendChangeStatusRequest(){
    const title = this.title;
    $.ajax({
        url:this.__host+'/api/task/'+this.__id+'/',
        method: 'PUT',
        data: {
            title: this.title,
            description: 'empty',
            is_active: !this.is_active
        },
        success: (tasks,status) => {
        },
        error: function (response, status){
            console.log(response);
            console.log(status);
        }
    });
}
}


