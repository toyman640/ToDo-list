import './style.css';

const todos = [
  {
    description: 'Pray to God',
    completed: true,
    index: 0,
  },
  {
    description: 'Clean the house',
    completed: false,
    index: 1,
  },
  {
    description: 'Preapre Breakfast',
    completed: false,
    index: 2,
  },
  {
    description: 'Start Microverse',
    completed: true,
    index: 3,
  },
];

const task = document.querySelector('.tasks');

function component() {
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
    const line = document.createElement('hr');
    container.appendChild(status);
    container.appendChild(describe);
    supertop.appendChild(container);
    supertop.appendChild(line);
    task.insertBefore(supertop, task.querySelector('.reset'));
  });
}
component();