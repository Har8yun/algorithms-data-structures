class HashTable {
    #table = new Array(127);
    size = 0;

    #hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.#table.length;
    }

    set(key, value) {
        const index = this.#hash(key);
        const tableItem = this.#table[index];

        if (tableItem) {
            for (let i = 0; i < tableItem.length; i++) {
                if (tableItem[i][0] === key) {
                    tableItem[i][1] = value;

                    return ++this.size;
                }
            }

            tableItem.push([key, value]);
            return ++this.size;

        } else {
            this.#table[index] = [ [key, value] ];
        }

        return ++this.size;
    }

    get(key) {
        const index = this.#hash(key);
        const tableItem = this.#table[index];
        if (tableItem && tableItem.length) {
            for (let i = 0; i < tableItem.length; i++) {
                if (tableItem[i][0] === key) {
                    return tableItem[i][1];
                }
            }
        }
    }

    delete(key) {
        const index = this.#hash(key);
        const tableItem = this.#table[index];
        if (tableItem && tableItem.length) {
            for (let i = 0; i < tableItem.length; i++) {
                if (tableItem[i][0] === key) {
                    tableItem.splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }

        return false;
    }

}

window.HashTable = HashTable;
