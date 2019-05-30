'use strict'

// Search for saved data in the localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
};

// Modify the correct objects completed property
const toggleTodo = (id) => {
  const todo = todos.find((todo) => {
    return todo.id === id
  })

  if (todo) {
    todo.completed = !todo.completed
  }
}

// Remove todo by id
const removeTodo = (id) => {
  const todoId = todos.findIndex((index, todo) => todos.id === id)
  if (todoId > -1) {
    todos.splice(todoId, 1);
  }
}

// Save the data to the localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// render notes
const renderTodos = (todos, filters) => {
  let filteredTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  filteredTodos = filteredTodos.filter((todo) => {
    if (filters.hideCompleted) {
      return !todo.completed;
    } else {
      return true;
    }
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#search-todo").innerHTML = "";

  generateSummaryDOM(incompleteTodos);

  filteredTodos.forEach((todo) => generateTodoDOM(todo));

  return incompleteTodos;
};

// Generate the todos to the screen
const generateTodoDOM = (todo) => {
  const container = document.createElement('div')
  const checkbox = document.createElement('input');
  const todoElement = document.createElement("span");
  const button = document.createElement('button');

  todoElement.textContent = todo.text;
  // Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  button.textContent = 'x';

  document.querySelector("#search-todo").appendChild(container);
  container.appendChild(checkbox);
  container.appendChild(todoElement);
  container.appendChild(button);

  button.addEventListener('click', () => {
    removeTodo(todos.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })

  checkbox.checked = todo.completed;
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id)
    saveTodos(todos);
    renderTodos(todos, filters);
  })

  return container;
};

// generate Summary to the screen

const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#search-todo").appendChild(summary);
};


  