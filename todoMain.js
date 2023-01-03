const toDoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

document.addEventListener('DOMContentLoaded',getToDo);
todoList.addEventListener('click',deleteCheck);
// todoList.addEventListener('click',testFunc);

toDoInput.addEventListener('keyup', (e) => {

if(e.key === 'Enter') {

    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // add to do to local storage
    saveLocalTodos(toDoInput.value);


    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create LI
    const   newTodo = document.createElement('li');
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    

    // adding trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
        todoList.appendChild(todoDiv);
        toDoInput.value = "";}

});




// DELETE FUCNTION

function deleteCheck(e){
    const item = e.target;
    // DELETE TODO
    if (item.classList[0] === "trash-btn"){
       const todo = item.parentElement;
       todo.classList.add("fall");
       removeLocalTodos(todo);
       todo.addEventListener('transitionend', function(){
        todo.remove();

       })
    }
    // CHECK MARK
        if(item.classList[0] === "complete-btn"){
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }

}

// function testFunc(e){
//     const item = e.target;
//     const todo = item.parentElement;
//     console.log(todo.children[1].innerText);


// }






function saveLocalTodos(todo){

    let todos;

    if(localStorage.getItem('todos') ===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}


function getToDo(){
    let todos;
    if(localStorage.getItem('todos') ===null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

 
    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create LI
    const   newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    

    // adding trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
        todoList.appendChild(todoDiv);




    });


}


function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos=[];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    // const item = e.target;

    // console.log(todo.children[0].innerText);
    const   todoIndex = todo.children[1].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos",JSON.stringify(todos));
}
