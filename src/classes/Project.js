export default class Project {
    #name;
    #todos;

    constructor(name, todos = []) {
        this.#name = name;
        this.#todos = todos;
    }

    get name() {
        return this.#name;
    }

    get todos() {
        return this.#todos;
    }

    addTodo(todo) {
        this.#todos.push(todo);
    }
}