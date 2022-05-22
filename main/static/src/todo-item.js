class TodoItem{
    constructor(title,id)
    {
        this.title=title;
        this.__createHtmlElement()
        this.__host = "http://localhost:8000";
        this.__id = id;
    }

__createHtmlElement(pk)
{
    const div=document.createElement('div')
    div.className="todo-app_item todo-item"

    const titleSpan=document.createElement('span')
    titleSpan.className="todo-item_text";
    titleSpan.innerText=this.title;

    const deleteSpan=document.createElement('span')
    deleteSpan.className="todo-item_delete";
    deleteSpan.innerText='x';

    div.append(titleSpan,deleteSpan)

    this.htmlElement=div;

    this.__id = pk;

    deleteSpan.onclick=this.remove.bind(this);

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
            this.__createHtmlElement(response);
            body.append(this.getHtmlElement());
        },
        error: function (response, status){
            console.log(response);
            console.log(status);
        }
        });
}

getHtmlElement()
{
    return this.htmlElement;
}

// remove(){
//     this.htmlElement.remove();
// }

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
        },
        error: function (response, status){
            console.log(response);
            console.log(status);
        }
        });
}
}


