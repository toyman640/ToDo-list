const handleEditClick = (container, describe, description) => {
  if (!container.querySelector('.edit-input')) {
    const editInput = document.createElement('input');
    editInput.value = description;
    editInput.classList.add('edit-input');
    container.replaceChild(editInput, describe);
    editInput.focus();
    editInput.addEventListener('blur', () => {
      const newDescription = editInput.value.trim();
      if (newDescription) {
        describe.textContent = newDescription;
      //   localStorage.setItem('todos', JSON.stringify(todos));
      }
      container.replaceChild(describe, editInput);
    });
    editInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        editInput.blur();
      }
    });
  }
};
module.exports = handleEditClick;