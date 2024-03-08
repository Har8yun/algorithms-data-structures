class TreeNode {
    constructor(key, value = key, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }

    get isLeaf() {
        return !this.children.length;
    }

    get hasChildren() {
        return !this.isLeaf;
    }
}

class Tree {
    constructor(key, value = key) {
        this.root = new TreeNode(key, value)
    }

    traverseDepthFirst(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }

    traverseBreadthFirst(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.push(...node.children);
            fn(node);
        }
    }

    * preOrderTraversal(node = this.root) {
        yield node;
        if (node.children.length) {
            for (const child of node.children) {
                yield* this.preOrderTraversal(child);
            }

        }
    }

    * postOrderTraversal(node = this.root) {
        if (node.children.length) {
            for (const child of node.children) {
                yield* this.postOrderTraversal(child)
            }
        }

        yield node;
    }

    insert(parentNodeKey, key, value = key) {
        for (const node of this.preOrderTraversal()) {
            if (node.key === parentNodeKey) {
                node.children.push(new TreeNode(key, value, node))
                return true;
            }
        }

        return false;
    }

    remove(key) {
        for (const node of this.preOrderTraversal()) {
            const filtered = node.children.filter(c => c.key !== key);
            if (node.children.length !== filtered.length) {
                node.children = filtered;
                return true;
            }
        }

        return false;
    }

    find(key) {
        for (const node of this.preOrderTraversal()) {
            if (node.key === key) {
                return node
            }
        }
    }


}

window.Tree = Tree;