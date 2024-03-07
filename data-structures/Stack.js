export class Stack {
    #items = [];

    constructor(initialItem) {
        if (initialItem) {
            return this.#items.push(initialItem);
        }
    }

    add (item) {
        return this.#items.push(item);
    }

    remove() {
        return this.#items.pop();
    }

    get size() {
        return this.#items.length;
    }

    isEmpty() {
        return !!this.#items.length;
    }

    top () {
        return this.#items[this.size-1]
    }
}

window.Stack = Stack;