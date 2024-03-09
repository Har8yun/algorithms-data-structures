function partition(items, left, right) {
    let ll = left;
    let rr = right;
    const pivot = items[Math.floor((rr + ll) / 2)] // middle element

    while (ll <= rr) {
        while (items[ll] < pivot) {
            ll++;
        }

        while (items[rr] > pivot) {
            rr--;
        }

        if ( ll <= rr) {
            const temp = items[ll];
            items[ll] = items[rr];
            items[rr] = temp;
            ll++;
            rr--;
        }
    }

    return ll
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, right -1);
        }

        if (index < right) {
            quickSort(items, index, right)
        }
    }

    return items;
}

window.quickSort = quickSort;