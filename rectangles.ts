export type coord = [number, number];
type rectangle = [coord, coord, coord, coord]

type coordTable = {
    [key: string]: boolean;
}

export function getRectangles(coords: coord[]): rectangle[] {
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