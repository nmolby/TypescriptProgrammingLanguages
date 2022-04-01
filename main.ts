function calculateFib() {
    const element = <HTMLInputElement> document.getElementById("fib");
    let fibToCalculate = parseInt(element.value)
    const elementToChange = document.getElementById("fibResult")
    elementToChange!.innerHTML = fib(fibToCalculate).toString()
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
    elementToChange!.innerHTML = rectangleResult.toString()
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


type coord = [number, number];
type rectangle = [coord, coord, coord, coord]

type coordTable = {
    [key: string]: boolean;
}
 function getRectangles(coords: coord[]): rectangle[] {
    let coordTable = createCoordTable(coords)
    return getRectangleHelper(coords, coordTable)
}

function getRectangleHelper(coords: coord[], table: coordTable): rectangle[] {
    var rectangles: rectangle[] = []

    for(let coord1 of coords) {
        for(let coord2 of coords) {
            //if the second coordinate is in the top right quadrant of the first cooordinate
            if(coord2[1] > coord1[1] && coord2[0] > coord1[0]) {
                let topLeft: coord = [coord1[0], coord2[1]]
                let bottomRight: coord = [coord2[0], coord1[1]]
                if(getHash(topLeft) in table && getHash(bottomRight)) {
                    rectangles.push([coord1, topLeft, coord2, bottomRight])
                }
            }
        }
    }

    return rectangles
}

function createCoordTable(coords: coord[]): coordTable {
    var table: coordTable = {}
    for(let coord of coords) {
        table[getHash(coord)] = true
    }

    return table
}

function getHash(coord: coord): string {
    return `${coord[0]}-${coord[1]}`
}