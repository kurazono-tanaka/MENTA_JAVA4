'use strict';

{
  const addTaskValue = document.getElementById('task');
  const tbody = document.querySelector('tbody');
  const radioButton = document.querySelectorAll('.radio-button');
  const radioButtonAll = document.getElementById('radio-all-select');
  const radioButtonWorking = document.getElementById('radio-working-select');
  const radioButtonDone = document.getElementById('radio-done-select');
  const todos = [];

  //ラジオボタン押下イベント
  radioButton.forEach((radio,number) => {
    radioButton[number].addEventListener('click', () => {
      filterTodos();
    });
  });


  //フィルター分け関数
  function filterTodos() {
    if(radioButtonAll.checked) {
      displayTodos(todos);
    } else if(radioButtonWorking.checked){
      const workingTodos = todos.filter(todo => todo.status === '作業中')
      displayTodos(workingTodos);
    } else if(radioButtonDone.checked){
      const doneTodos = todos.filter(todo => todo.status === '完了')
      displayTodos(doneTodos);
    }
  }

  // todoを追加する関数
  function addTask(task) {
    const todo = {};
    todo.id = todos.length;
    todo.task = task;
    todo.status = '作業中';
    todos.push(todo);
  }

  // todoを表示する関数
  function displayTodos(todos) {
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
      statusButton.addEventListener('click',() => {
        if(statusButton.textContent === "作業中") {
          todo.status = "完了";
          if(radioButtonWorking.checked) {
            const targetTask = statusButton.closest('tr');
            tbody.removeChild(targetTask);
          }
        } else if(statusButton.textContent === "完了") {
          todo.status = "作業中";
          if(radioButtonDone.checked) {
            const targetTask = statusButton.closest('tr');
            tbody.removeChild(targetTask);
          }
        }
        statusButton.textContent = todo.status;
      });
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
    filterTodos();
    addTaskValue.value = '';
  });

}
