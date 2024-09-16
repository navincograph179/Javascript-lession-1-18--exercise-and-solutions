const todoList = [{
  name: 'Cook Food',
  todoDate: '12-08-2024'

}];

function renderList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    const {name, todoDate} = todoObject;
    const html = `
  <div>${name} </div>
  <div>${todoDate}</div>
  <button onclick = "
    todoList.splice(${i}, 1);
    renderList();
  ">Delete</button>
  `;
    todoListHtml += html;
  }

  console.log(todoList);
  document.querySelector(".todoList-result").innerHTML = todoListHtml;
}

function addTodo() {
  const inputTodo = document.querySelector(".input-todo");
  const name = inputTodo.value;
  
  const inputDate = document.querySelector(".input-date");
  const todoDate = inputDate.value;

  todoList.push({name, todoDate});
  inputTodo.value = "";

  renderList();
}
/*
let i = 1;
while(i <= 5) {
  console.table(i);
  i++;
}

for(let a = 1; a <=5; a++) {
  console.log(a+100000000)
}

let randomNumber = 0;

while(randomNumber < 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber); 
*/
