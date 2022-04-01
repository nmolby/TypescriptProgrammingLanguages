"use strict";
exports.__esModule = true;
var rectangles_js_1 = require("./rectangles.js");
function calculateFib() {
    var element = document.getElementById("fib");
    var fibToCalculate = parseInt(element.value);
    var elementToChange = document.getElementById("fibResult");
    elementToChange.innerHTML = fib(fibToCalculate).toString();
}
function rectangleHelper() {
    var element = document.getElementById("rect");
    var coordStrings = element.value.split(';');
    console.log(coordStrings);
    var coords = [];
    for (var _i = 0, coordStrings_1 = coordStrings; _i < coordStrings_1.length; _i++) {
        var coordString = coordStrings_1[_i];
        var sides = coordString.split(',');
        console.log(sides);
        var leftSide = parseInt(sides[0].substring(1));
        var rightSide = parseInt(sides[1].substring(0, sides[1].length - 1));
        coords.push([leftSide, rightSide]);
    }
    var rectangleResult = (0, rectangles_js_1.getRectangles)(coords);
    var elementToChange = document.getElementById("rectResult");
    elementToChange.innerHTML = rectangleResult.toString();
}
function fib(x) {
    if (x == 0) {
        return 0;
    }
    else if (x == 1) {
        return 1;
    }
    else if (x == 2) {
        return 1;
    }
    else {
        return fib(x - 1) + fib(x - 2);
    }
}
