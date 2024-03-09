function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0, next = 1; i < arr.length -1; i++, next++) {
            if (arr[i] > arr[next]) {
                const temp = arr[i];
                arr[i] = arr[next];
                arr[next] = temp;
            }
        }
    }

    return arr;
}

window.bubbleSort = bubbleSort;

