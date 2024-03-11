function debounce(fn = () => console.log("hello debounce"), delay = 300) {
    let timerId;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args)
        }, delay)

    }
}

function throttle(fn = () => console.log("hello debounce"), delay = 300) {
    let timerId;

    return (...args) => {
        if (!timerId) {
            fn(...args)

            timerId = setTimeout(() => timerId = 0, delay)
        }
    }
}

window.throttle = throttle;
window.debounce = debounce;