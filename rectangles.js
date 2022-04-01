"use strict";
exports.__esModule = true;
exports.getRectangles = void 0;
function getRectangles(coords) {
    var coordTable = createCoordTable(coords);
    return getRectangleHelper(coords, coordTable);
}
exports.getRectangles = getRectangles;
function getRectangleHelper(coords, table) {
    var rectangles = [];
    for (var _i = 0, coords_1 = coords; _i < coords_1.length; _i++) {
        var coord1 = coords_1[_i];
        for (var _a = 0, coords_2 = coords; _a < coords_2.length; _a++) {
            var coord2 = coords_2[_a];
            //if the second coordinate is in the top right quadrant of the first cooordinate
            if (coord2[1] > coord1[1] && coord2[0] > coord1[0]) {
                var topLeft = [coord1[0], coord2[1]];
                var bottomRight = [coord2[0], coord1[1]];
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
    for (var _i = 0, coords_3 = coords; _i < coords_3.length; _i++) {
        var coord = coords_3[_i];
        table[getHash(coord)] = true;
    }
    return table;
}
function getHash(coord) {
    return "".concat(coord[0], "-").concat(coord[1]);
}
