import delIcon from './delete-icon.png';

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentIndex = todos.length + 1;

const task = document.querySelector('.tasks');
const clearButton = document.querySelector('#clear-checked');

export default function component() {
  task.innerHTML = '';
  todos.forEach((todo) => {
    const supertop = document.createElement('div');
    const container = document.createElement('div');
    container.classList.add('lists');
    const status = document.createElement('input');
    status.classList.add('check');
    status.type = 'checkbox';
    status.checked = todo.completed;
    const describe = document.createElement('p');
    describe.textContent = todo.description;
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-handle');
    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('trash');
    deleteIcon.src = delIcon;
    deleteButton.appendChild(deleteIcon);
    const line = document.createElement('hr');
    container.appendChild(status);
    container.appendChild(describe);
    container.appendChild(deleteButton);
    supertop.appendChild(container);
    supertop.appendChild(line);
    task.insertBefore(supertop, task.querySelector('.reset'));
    status.addEventListener('change', () => {
      todo.completed = status.checked;
      todo.status = status.checked;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
    clearButton.addEventListener('click', () => {
      const taskLeft = todos.filter((todo) => !todo.status);
      todos = taskLeft;
      todos.forEach((todo, index) => {
        todo.index = index + 1;
      });
      localStorage.setItem('todos', JSON.stringify(todos));
      component();
    });
    deleteButton.addEventListener('click', () => {
      const index = todos.findIndex((item) => item.index === todo.index);
      if (index !== -1) {
        // eslint-disable-next-line no-use-before-define
        removeTask(todo.index);
      }
    });
    container.addEventListener('click', () => {
      if (!container.querySelector('.edit-input')) {
        const editInput = document.createElement('input');
        editInput.value = todo.description;
        editInput.classList.add('edit-input');
        container.replaceChild(editInput, describe);
        editInput.focus();
        editInput.addEventListener('blur', () => {
          const newDescription = editInput.value.trim();
          if (newDescription) {
            todo.description = newDescription;
            localStorage.setItem('todos', JSON.stringify(todos));
          }
          component();
        });
        editInput.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            editInput.blur();
          }
        });
      }
    });
  });
}

const removeTask = (index) => {
  todos.splice(index - 1, 1);
  todos.forEach((todo, i) => {
    todo.index = i + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  component();
};

const addtask = (description, status = false) => {
  const todo = { description, index: currentIndex, status };
  todos.push(todo);
  currentIndex += 1;
  localStorage.setItem('todos', JSON.stringify(todos));
  component();
};

window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  component();
});

export { addtask, component };
