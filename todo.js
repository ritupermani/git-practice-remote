// Basic Todo List

const todos = [];

// Naya task add karna
function addTodo(task) {
  todos.push({ id: todos.length + 1, task: task, done: false });
  console.log(`Added: ${task}`);
}

// Task complete mark karna
function completeTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.done = true;
    console.log(`Completed: ${todo.task}`);
  } else {
    console.log("Task nahi mila");
  }
}

// Task delete karna
function deleteTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    const removed = todos.splice(index, 1);
    console.log(`Deleted: ${removed[0].task}`);
  } else {
    console.log("Task nahi mila");
  }
}

// Saari list dikhana
function showTodos() {
  console.log("\n--- Todo List ---");
  if (todos.length === 0) {
    console.log("Koi task nahi hai");
    return;
  }
  todos.forEach((t) => {
    console.log(`${t.id}. [${t.done ? "x" : " "}] ${t.task}`);
  });
}

// Use karke dekho
addTodo("Git practice karna");
addTodo("JavaScript seekhna");
addTodo("Project push karna");
showTodos();

completeTodo(1);
deleteTodo(2);
showTodos();




console.log("fifth cherry dudein todo")

console.log("adding items in todo list")