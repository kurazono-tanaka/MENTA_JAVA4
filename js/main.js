'use strict';

{
const addTaskValue = document.getElementById('task');
const tbody = document.querySelector('tbody');

const todos = [];

class Todo {
  constructor(task) {
    this.task = task;
    this.status = '作業中';
  }
}
const test = new Todo(task);

// todoを追加する関数
function addTask(task) {
  test.task = null;
  todos.push(test);
  console.log(test)
}

// todoを表示する関数
function displayTodos() {
  while(tbody.firstChild !== null){
    tbody.removeChild(tbody.firstChild);
  }
  todos.forEach((todo, index) => {
    //行作成
    const tr = document.createElement('tr');
    //ID
    const idTd = document.createElement('td');
    idTd.textContent = index;
    tr.appendChild(idTd);
    //コメント
    const commentTd = document.createElement('td');
    commentTd .textContent = todo.task;
    tr.appendChild(commentTd);
    //状態
    const statusTd = document.createElement('td');
    const statusButton = document.createElement('button');
    statusButton.textContent = todo.status;
    statusTd.appendChild(statusButton);
    tr.appendChild(statusTd);
    //削除
    const removeTd = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = '削除';
    removeTd.appendChild(removeButton);
    tr.appendChild(removeTd);
    //行追加
    tbody.appendChild(tr);
  });
}
document.getElementById('add').addEventListener('click', () => {
  const task = addTaskValue.value;
  addTask(task);
  displayTodos();
  addTaskValue.value = '';
});
}