class Queue {
    #items = {};
    #headIndex = 0;
    #tailIndex = 0;


    /** To add elements at the end of the queue.*/
    enqueue(item) {
        this.#items[this.#tailIndex] = item;
        this.#tailIndex++;
    }

    /** To remove an element from the front of the queue.*/
    dequeue() {
        const removedElement = this.#items[this.#headIndex];
        delete this.#items[this.#headIndex];
        this.#headIndex++;

        return removedElement;
    }

    /** To get the front element without removing it.*/
    peek() {
        return this.#items[this.#headIndex];
    }

    get size() {
        return this.#tailIndex - this.#headIndex;
    }

    get isEmpty() {
        return !(this.#tailIndex - this.#headIndex);
    }

    clear() {
        this.#items = {};
        this.#headIndex = 0;
        this.#tailIndex = 0;
    }
}

window.Queue = Queue;
