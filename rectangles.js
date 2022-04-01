"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRectangles = void 0;
function getRectangles(coords) {
    let coordTable = createCoordTable(coords);
    return getRectangleHelper(coords, coordTable);
}
exports.getRectangles = getRectangles;
function getRectangleHelper(coords, table) {
    var rectangles = [];
    for (let coord1 of coords) {
        for (let coord2 of coords) {
            //if the second coordinate is in the top right quadrant of the first cooordinate
            if (coord2[1] > coord1[1] && coord2[0] > coord1[0]) {
                let topLeft = [coord1[0], coord2[1]];
                let bottomRight = [coord2[0], coord1[1]];
                if (getHash(topLeft) in table && getHash(bottomRight)) {
                    rectangles.push([coord1, topLeft, coord2, bottomRight]);
                }
            }
        }
    }
    return rectangles;
}
function createCoordTable(coords) {
    var table = {};
    for (let coord of coords) {
        table[getHash(coord)] = true;
    }
    return table;
}
function getHash(coord) {
    return `${coord[0]}-${coord[1]}`;
}
