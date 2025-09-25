import Todo from "./classes/Todo";

const todo = new Todo("asd", "bfd", new Date(), "high", false);

console.log(todo.title, todo.description, todo.dueDate, todo.priority, todo.isDone)