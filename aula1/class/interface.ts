interface Point {
    x: number,
    y: number,
}

function printCoord(pt: Point) {
    console.log("X = " + pt.x)
    console.log("Y = " + pt.y)
}

printCoord({ x: 100, y: 200 })

const myPt: Point = { x: 100, y: 200 }