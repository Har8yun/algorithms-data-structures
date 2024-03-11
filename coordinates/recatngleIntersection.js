/**
 * Javascript program to find intersection rectangle of given two rectangles.
 * Function to find intersection rectangle of given two rectangles.
 * */
function FindRectIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {

    // Gives bottom-left point
    // of intersection rectangle
    const x5 = Math.max(x1, x3);
    const y5 = Math.max(y1, y3);

    // Gives top-right point
    // of intersection rectangle
    const x6 = Math.min(x2, x4);
    const y6 = Math.min(y2, y4);

    // No intersection
    if (x5 > x6 || y5 > y6) {
        return false;
    }

    return {x1: x5, y1: y6, x2: x6, y2: y5};
}

// bottom-left and top-right
// corners of first rectangle
const x1 = 0, y1 = 0,
    x2 = 10, y2 = 8;

// bottom-left and top-right
// corners of first rectangle
const x3 = 2, y3 = 3,
    x4 = 7, y4 = 9;

// Function call
const res = FindRectIntersection(x1, y1, x2, y2, x3, y3, x4, y4);
console.log("result", res)

window.FindRectIntersection = FindRectIntersection;
