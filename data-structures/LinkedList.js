class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head = null;
    size = 0;

    get firstNode() {
        return this.head;
    }

    getMiddle() {
        if (this.head) {
            let current = this.head;
            let doubleSpeed = this.head.next?.next;

            while (doubleSpeed) {
                current = current.next;
                doubleSpeed = doubleSpeed.next?.next;
            }

            return current;
        }

        return null;
    }

    get lastNode() {
        let lastNode = this.head;

        while (lastNode.next) {
            lastNode = lastNode.next;
        }

        return lastNode;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.size) {
            const lastNode = this.lastNode;

            lastNode.next = newNode;

        } else {
            this.head = newNode;
        }

        return ++this.size;
    }

    removeLast() {
        if (this.head) {

            let prevLastItem = this.head;
            if (!prevLastItem.next) {
                this.head = null;
                this.size = 0;

                return this.size;
            }

            while (prevLastItem.next?.next) {
                prevLastItem = prevLastItem.next;
            }

            prevLastItem.next = null;
            return --this.size;
        }

        return this.size;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    map(callBackFn) {
        if (this.size) {
            let lastNode = this.head;

            while (lastNode) {
                callBackFn(lastNode.data);
                lastNode = lastNode.next;
            }
        }
    }
}

window.LinkedList = LinkedList;