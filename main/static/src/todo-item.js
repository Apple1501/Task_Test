class TodoItem{
    constructor(title)
    {
        this.title=title;
        this.__createHtmlElement()
    }

__createHtmlElement()
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

    deleteSpan.onclick=this.remove.bind(this);

}
getHtmlElement()
{
    return this.htmlElement;
}

remove(){
    this.htmlElement.remove();
}
}


