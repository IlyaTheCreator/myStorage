// Create an array with five todos
const todos = [
  {
    text: "Wash the dishes",
    completed: false
  },
  {
    text: "Walk the dog",
    completed: false
  },
  {
    text: "Learn JS",
    completed: true
  },
  {
    text: "Do homework",
    completed: true
  },
  {
    text: "Learn new words",
    completed: true
  }
];

const deleteTodo = function(todos, search) {
  const index = todos.findIndex(function(todo, index) {
    return todo.text.toLowerCase() === search.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  } else {
    console.log("Sorry, there's no match.");
  }
};

// show only todos which are not yet completed

const getThingsToDo = function(list) {
  return list.filter(function(item, index) {
    return !item.completed;
  });
};

const sortTodos = function(list) {
  list.sort(function(a, b) {
    if (a.completed < b.completed) {
      return -1;
    } else if (a.completed > b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);

//console.log(getThingsToDo(todos));

// console.log(todos);
// console.log(" ");
// console.log(" ");
// deleteTodo(todos, "learn js");
// console.log(todos);
