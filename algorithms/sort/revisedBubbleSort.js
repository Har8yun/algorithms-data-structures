function revisedBubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        let anySwap = false;

        for (let i = 0, next = i + 1; i < arr.length; i++, next++) {
            if (arr[i] > arr[next]) {
                const temp = arr[i];
                arr[i] = arr[next];
                arr[next] = temp;

                anySwap = true;
            }
        }

        if (!anySwap) {
            break;
        }
    }

    return arr
}

window.revisedBubbleSort = revisedBubbleSort