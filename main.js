"use strict";
function calculateFib() {
    const element = document.getElementById("fib");
    let fibToCalculate = parseInt(element.value);
    const elementToChange = document.getElementById("fibResult");
    elementToChange.innerHTML = fib(fibToCalculate).toString();
}
function rectangleHelper() {
    const element = document.getElementById("rect");
    var coordStrings = element.value.split(';');
    console.log(coordStrings);
    var coords = [];
    for (let coordString of coordStrings) {
        let sides = coordString.split(',');
        console.log(sides);
        let leftSide = parseInt(sides[0].substring(1));
        let rightSide = parseInt(sides[1].substring(0, sides[1].length - 1));
        coords.push([leftSide, rightSide]);
    }
    let rectangleResult = getRectangles(coords);
    const elementToChange = document.getElementById("rectResult");
    elementToChange.innerHTML = rectangleResult.reduce((prevVal, currentVal) => prevVal + "<br>" + currentVal.toString(), "");
}
function linkedListHelper() {
    const listElement = document.getElementById("list");
    const amountElement = document.getElementById("amount");
    var list = listElement.value.split(',');
    var amount = Number(amountElement.value);
    var linkedList = generateLinkedList(list);
    var shiftedLinkedList = shiftLinkedList(linkedList, amount);
    const elementToChange = document.getElementById("listResult");
    elementToChange.innerHTML = linkedListToString(shiftedLinkedList);
}
function linkedListToString(linkedList, currentSring = "") {
    var newString;
    if (currentSring != "") {
        newString = currentSring + "," + linkedList.value;
    }
    else {
        newString = linkedList.value.toString();
    }
    if (linkedList.nextNode != undefined) {
        return linkedListToString(linkedList.nextNode, newString);
    }
    else {
        return newString;
    }
}
function generateLinkedList(list) {
    let head = new linkedListNode(Number(list[0]));
    let lastValue = head;
    for (let i = 1; i < list.length; i++) {
        let newValue = new linkedListNode(Number(list[i]));
        lastValue.nextNode = newValue;
        lastValue = newValue;
    }
    return head;
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
class rectangle {
    constructor(coords) {
        this.toString = () => {
            return `[${this.coords[0]}],[${this.coords[1]}],[${this.coords[2]}],[${this.coords[3]}]`;
        };
        this.coords = coords;
    }
}
class linkedListNode {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
function getRectangles(coords) {
    let coordTable = createCoordTable(coords);
    return getRectangleHelper(coords, coordTable);
}
function shiftLinkedList(head, amount) {
    let length = 1;
    let tailNode = head;
    while (tailNode.nextNode != undefined) {
        length += 1;
        tailNode = tailNode.nextNode;
    }
    let offset = Math.abs(amount) % length;
    if (offset == 0)
        return head;
    let newTailIdx = length - offset - 1;
    let newTail = head;
    for (let i = 0; i < newTailIdx; i++) {
        newTail = newTail.nextNode;
    }
    let nodeToReturn = newTail.nextNode;
    newTail.nextNode = undefined;
    tailNode.nextNode = head;
    return nodeToReturn;
}
function getRectangleHelper(coords, table) {
    var rectangles = [];
    for (let coord1 of coords) {
        for (let coord2 of coords) {
            //if the second coordinate is in the top right quadrant of the first cooordinate
            if (coord2[1] > coord1[1] && coord2[0] > coord1[0]) {
                let topLeft = [coord1[0], coord2[1]];
                let bottomRight = [coord2[0], coord1[1]];
                if (getHash(topLeft) in table && getHash(bottomRight)) {
                    rectangles.push(new rectangle([coord1, topLeft, coord2, bottomRight]));
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
