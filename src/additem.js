// const todos = require('./manage');


// const localStorageMock = (function () {
//     let store = {};
  
//     return {
//       getItem(key) {
//         return store[key];
//       },
  
//       setItem(key, value) {
//         store[key] = value;
//       },
  
//       clear() {
//         store = {};
//       },
  
//       removeItem(key) {
//         delete store[key];
//       },
  
//       getAll() {
//         return store;
//       },
//     };
// })();

const addtask = (description = 'hello', status = false) => {
    const todos = [];
    const todo = { description, index, status };
    todos.push(todo);
    // currentIndex += 1;
    localStorage.setItem('todos', JSON.stringify(todos));
    // component();
    return todo;
};

module.exports = addtask, localStorage