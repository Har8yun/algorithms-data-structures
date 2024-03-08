/**
 * Binary search tree, as shown in its name, is an ordered tree data structure.
 * Every parent nodes has at most two children, every node to the left of a parent node is
 * always less than the parent and every node to the right of the parent node is always greater
 * than the parent.
*/
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root = null;

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (current) {
            if (value === current.value) {
                return false;
            }

            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) {
            return false;
        }

        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }
}

window.BinarySearchTree = BinarySearchTree;