'use strict'

let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false
};

renderTodos(todos, filters);

document.querySelector("#search").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#add-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo = e.target.elements.addNewTodo.value;
  todos.unshift({
    id: uuidv4(),
    text: newTodo,
    completed: false
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.addNewTodo.value = " ";
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});