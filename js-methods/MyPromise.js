function myDelay(delayTime) {
    return new Promise((res) => {
        setTimeout(() => res(delayTime), delayTime)
    })
}

function MyPromiseAll(items) {
    return new Promise((res, rej) => {
        const results = [];
        let count = 0;

        items.forEach((item, index) => {
            Promise.resolve(item)
                .then(result => {
                    results[index] = result;
                    count++;

                    if (count === items.length) {
                        res(results);
                    }
                })
                .catch(er => rej(er))
        })
    })
}

function MyPromiseAllReducer(items) {
    return items.reduce((prevPromise, item) => {
        return prevPromise
            .then(prevResults => {
                return Promise.resolve(item)
                    .then(result => {
                        return [...prevResults, result];
                    })
            })

    }, Promise.resolve([]))

}

function MyPromiseAllRecursive(items) {
    if (items.length === 0) {
        return Promise.resolve([]);
    }

    const [first, ...restItems] = items;

    return Promise.resolve(first)
        .then(firstResult => {
            return MyPromiseAllRecursive(restItems)
                .then(restResults => {
                    return [firstResult, ...restResults];
                })
        })
}

window.myDelay = myDelay;
window.MyPromiseAll = MyPromiseAll;
window.MyPromiseAllReducer = MyPromiseAllReducer;
window.MyPromiseAllRecursive = MyPromiseAllRecursive;
