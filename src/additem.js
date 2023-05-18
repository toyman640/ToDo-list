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

const addtask = (description, status=false,index =1) => {
    const todos = [];
    const todo = { description,status,index };
    todos.push(todo);
    todos.forEach((todo,indexs)=>{
        todo.index =  indexs+index
    })
    // currentIndex += 1;
    // localStorage.setItem('todos', JSON.stringify(todos));
    // component();
    return todos;
};

module.exports = addtask