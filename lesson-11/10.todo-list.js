const todoList = ["wash dishes", "cook food"];

function renderList () {
  let todoListHtml = '';

for(let i = 0; i< todoList.length; i++) {
  let list = todoList[i];
  const html = `<p>${list}</p>`;
  todoListHtml += html;
}

console.log(todoList);
document.querySelector('.todoList-result').innerHTML = todoListHtml;
}


function addTodo() {
  const inputTodo = document.querySelector('.input-todo');
  const name = inputTodo.value;
  todoList.push(name);
  inputTodo.value = '';

  renderList()
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

 