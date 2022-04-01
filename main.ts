import { getRectangles, coord } from "./rectangles.js"

function calculateFib() {
    const element = <HTMLInputElement> document.getElementById("fib");
    let fibToCalculate = parseInt(element.value)
    const elementToChange = document.getElementById("fibResult")
    elementToChange.innerHTML = fib(fibToCalculate).toString()
}

function rectangleHelper() {
    const element = <HTMLInputElement> document.getElementById("rect");
    var coordStrings = element.value.split(';')
    console.log(coordStrings)
    var coords: coord[] = []

    for(let coordString of coordStrings) {
        let sides = coordString.split(',')
        console.log(sides)
        let leftSide = parseInt(sides[0].substring(1))
        let rightSide = parseInt(sides[1].substring(0, sides[1].length - 1))
        coords.push([leftSide, rightSide])
    }

    let rectangleResult = getRectangles(coords)
    const elementToChange = document.getElementById("rectResult")
    elementToChange.innerHTML = rectangleResult.toString()
}

function fib(x: number): number {
    if(x == 0) {
        return 0
    } else if (x == 1) {
        return 1
    } else if (x == 2) {
        return 1
    } else {
        return fib(x - 1) + fib(x - 2)
    }
}

