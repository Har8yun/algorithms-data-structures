function findCoordinates(r, corners = 4) {
    const stepAngle = 2 * Math.PI / corners;
    const coordinates = {};

    for (let i = 0; i < corners; i++) {
        const currentAngle = i * stepAngle;
        coordinates[i] = {
            [`x${i}`]: r * Math.cos(currentAngle).toFixed(2),
            [`y${i}`]: r * Math.sin(currentAngle).toFixed(2)
        }
    }


    return coordinates;
}

window.findCoordinates = findCoordinates;