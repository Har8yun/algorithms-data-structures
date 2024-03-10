/**
 * principle of divide and conquer
 * for sorted data
 * */
function binarySearch(arr, target) {
    const {length} = arr;
    let start = 0;
    let end = arr.length - 1;
    const isAscending = arr[start] < arr[end];

    if (isAscending) {
        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);
            const midEl = arr[mid];
            if (midEl > target) {
                end = mid - 1;
            } else if (midEl < target) {
                start = mid + 1;
            } else {
                return mid;
            }
        }

    } else {
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            const midEl = arr[mid];
            if (midEl < target) {
                end = mid - 1;
            } else if (midEl > target) {
                start = mid + 1;
            } else {
                return mid;
            }
        }
    }

    return -1;
}

window.binarySearch = binarySearch;