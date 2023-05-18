const clearCompleted = (todos) => {
  const taskLeft = todos.filter((todo) => !todo.status);
  todos = taskLeft;
  todos.forEach((todo, index) => {
    todo.index = index + 1;
  });
  return todos;
};

module.exports = clearCompleted;