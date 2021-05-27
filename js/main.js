'use strict';

{
  let count = 0;
  const task = document.getElementById('task');
  const tbody = document.querySelector('tbody');

  document.getElementById('add').addEventListener('click', () => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');

    //ID
    const idTd = document.createElement('td');
    idTd .textContent = count;
    tr.appendChild(idTd);

    //コメント
    const commentTd = document.createElement('td');
    commentTd .textContent = task.value;
    tr.appendChild(commentTd);

    //状態
    const statusTd = document.createElement('td');
    const statusButton = document.createElement('button');
    statusButton.textContent = '作業中';
    statusTd.appendChild(statusButton);
    tr.appendChild(statusTd);

    //削除ボタン
    const removeTd = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = '削除';
    removeTd.appendChild(removeButton);
    tr.appendChild(removeTd);

    tbody.appendChild(tr);

    task.value = '';
    count++;
  });
}