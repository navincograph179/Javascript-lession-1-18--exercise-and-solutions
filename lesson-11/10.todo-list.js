const todoList = [];


function addTodo() {
  const inputTodo = document.querySelector('.input-todo');
  const name = inputTodo.value;
  todoList.push(name);
  inputTodo.value = '';
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

 