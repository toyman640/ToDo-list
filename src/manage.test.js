const handleEditClick = require('./editItem.js');
const clearCompleted = require('./clearTask.js');

describe('edit item', () => {
  test('edit task', () => {
    const container = document.createElement('div');
    container.classList.add('container');
    const describe = document.createElement('p');
    describe.classList.add('describe');
    describe.textContent = 'book';
    container.appendChild(describe);
    document.body.appendChild(container);
    const description = 'boy';
    handleEditClick(container, describe, description);
    const editInput = container.querySelector('.edit-input');
    editInput.value = 'girl';
    editInput.dispatchEvent(new Event('blur'));
    expect(describe.textContent).toEqual('girl');
  });
});

describe('clearCompleted', () => {
  test('removes all status true items from todos array', () => {
    let todos = [
      { description: 'Task 1', status: true },
      { description: 'Task 2', status: true },
      { description: 'Task 3', status: false },
      { description: 'Task 4', status: false },
    ];
    todos = clearCompleted(todos);
    const completedTasks = todos.filter((todo) => !todo.status);
    expect(completedTasks.length).toEqual(2);
  });
});
