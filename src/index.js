import './style.css';
import { addtask } from './manage.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTask = document.querySelector('#task');
  const description = newTask.value;
  addtask(description);
  newTask.value = '';
});
