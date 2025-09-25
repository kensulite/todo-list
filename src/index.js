import Project from "./classes/Project";
import Todo from "./classes/Todo";

const todo = new Todo("asd", "bfd", new Date(), "high", false);

const project = new Project("project1");
project.addTodo(todo);