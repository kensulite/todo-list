
export default class Todo {

    #title;
    #description;
    #dueDate;
    #priority;
    #isDone;

    constructor(title, description, dueDate, priority, isDone) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#isDone = isDone;
    }

    get title() {
        return this.#title;
    }

    get description() {
        return this.#description;
    }

    get dueDate() {
        return this.#dueDate;
    }

    get priority() {
        return this.#priority;
    }

    get isDone() {
        return this.#isDone;
    }
}