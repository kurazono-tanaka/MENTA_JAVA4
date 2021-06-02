'use strict';

{
  const addTaskValue = document.getElementById('task');
  const tbody = document.querySelector('tbody');

  const todos = [];

  // todoを追加する関数
  function addTask(task) {
    const todo = {};
    todo.id = todos.length;
    todo.task = task;
    todo.status = '作業中';
    todos.push(todo);
  }

  // todoを表示する関数
  function displayTodos() {
    while(tbody.firstChild !== null){
      tbody.removeChild(tbody.firstChild);
    }
    todos.forEach((todo) => {
      //行作成
      const tr = document.createElement('tr');
      //ID
      const idTd = document.createElement('td');
      idTd.textContent = todo.id;
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
      removeButton.addEventListener('click',() => {
      　const targetTask = removeButton.closest('tr');
        tbody.removeChild(targetTask);
        todos.splice(todo.id, 1);
        todos.forEach((todo, index) => {
          todo.id = index;
        });
        tbody.childNodes.forEach((tr,index) => {
          tr.firstChild.textContent = todos[index].id;
        });
      });
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
