function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let assumedMinIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[assumedMinIndex]) {
                assumedMinIndex = j;
            }
        }

        if (assumedMinIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[assumedMinIndex];
            arr[assumedMinIndex] = temp;
        }
    }

    return arr;
}

window.selectionSort = selectionSort;