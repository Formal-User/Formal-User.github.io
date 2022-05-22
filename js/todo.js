const toDoInput = document.querySelector("#todo-input");

const TODO_KEY = "todos";

let toDoArr = [];
const savedTodo = localStorage.getItem(TODO_KEY);

function showTodo(){
    todoContainer.classList.remove("hidden");
}

function hideTodo(event){ 
  if(!event.path.includes(toDoInput)&&!event.path.includes(todoContainer)){
    todoContainer.classList.add("hidden");
    }
}

function saveToDo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(toDoArr));
}

function removeTodoComtent(event){
  const targetTag = event.composedPath()[1];
  toDoArr = toDoArr.filter(item => String(item.id)!= targetTag.id);
  targetTag.remove();
  saveToDo();
}

function paintToDo(toDoContents){
  const addList = document.createElement("div");
  const addText = document.createElement("span");
  const delbutton = document.createElement("span");

  addText.innerText = toDoContents.Text;

  delbutton.classList.add("delbutton");
  delbutton.innerText = "✔️";
  delbutton.addEventListener("mouseover",(e) => {e.toElement.style.cursor = 'pointer';});

  addList.id = toDoContents.id;

  addList.appendChild(delbutton);
  addList.appendChild(addText);
  todoContainer.appendChild(addList);
  delbutton.addEventListener("click",removeTodoComtent);
}

function addTodo(event){
  event.preventDefault();
  const toDoVal = toDoInput.querySelector("input").value;
  toDoInput.querySelector("input").value = "";
  const toDoContents = {
    id:Date.now(),
    Text:toDoVal,
  }
  toDoArr.push(toDoContents);
  paintToDo(toDoContents);
  saveToDo();
}

toDoInput.addEventListener("click",showTodo);
toDoInput.addEventListener("submit",addTodo);
mainPage.addEventListener("click",hideTodo);


if(savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  toDoArr = parsedTodo;
  parsedTodo.forEach(paintToDo);
  saveToDo();
}