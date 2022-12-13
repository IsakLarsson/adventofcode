const fs = require('fs')
const rows = fs.readFileSync(`./input.txt`, 'utf8').trim().split('\n')

// const rows = fs.readFileSync(`./input2.txt`, 'utf8').trim().split('\n')

/*
 * Something went very wrong somwehere and it doesn't work when running consecutively
 * with different goal points. This is also a horrible implementation of A* and is not
 * something im proud of. Thank you
 */

let maze = new Array(rows.length)
class Point {
    f = Infinity
    g = Infinity
    h = Infinity
    constructor(x, y) {
        this.position = { x: x, y: y }
        this.parent = null
        this.height = rows[y][x].charCodeAt(0)
    }
}
const goalPoints = []
const initMaze = () => {
    for (let row = 0; row < rows.length; row++) {
        maze[row] = new Array()
        for (let col = 0; col < rows[0].length; col++) {
            maze[row].push(new Point(col, row))
        }
    }
}
const initGoalPoints = () => {
    for (let row = 0; row < rows.length; row++) {
        for (let col = 0; col < rows[0].length; col++) {
            if (
                rows[row].charCodeAt(col) === 97 ||
                rows[row].charCodeAt(col) === 83
            ) {
                goalPoints.push(new Point(col, row))
            }
        }
    }
}

let openList = []
let closedList = []
const isOnOpenList = (nextP) => {
    if (
        openList.find(
            (element) =>
                element.position.x === nextP.x && element.position.y === nextP.y
        )
    ) {
        return true
    }
    return false
}
const isInClosedList = (nextP) => {
    if (
        closedList.find(
            (element) =>
                element.position.x === nextP.x && element.position.y === nextP.y
        )
    ) {
        return true
    }
    return false
}
const takeStep = (currentSquare, nextP, goalPoint) => {
    if (nextP.x < 0 || nextP.x >= rows[0].length) {
        return false
    } else if (nextP.y < 0 || nextP.y >= rows.length) {
        return false
    }
    const nextPoint = maze[nextP.y][nextP.x]
    if (isInClosedList(nextP)) {
        return false
    }
    const currentHeight = currentSquare.height
    const nextHeight = nextPoint.height
    if (
        nextHeight === currentHeight - 1 ||
        nextHeight === currentHeight ||
        nextHeight > currentHeight ||
        nextHeight === 97 ||
        nextHeight === 83
    ) {
        if (!isOnOpenList(nextP)) {
            nextPoint.parent = currentSquare
            nextPoint.g = currentSquare.g + 1
            nextPoint.h =
                Math.abs(goalPoint.position.x - nextPoint.position.x) +
                Math.abs(goalPoint.position.y - nextPoint.position.y)
            nextPoint.f = nextPoint.g + nextPoint.h
            openList.push(nextPoint)
            return
        } else {
            if (nextPoint.g < currentSquare.g) {
                nextPoint.g = currentSquare.g + 1
                nextPoint.h =
                    Math.abs(goalPoint.position.x - nextPoint.position.x) +
                    Math.abs(goalPoint.position.y - nextPoint.position.y)
                nextPoint.f = nextPoint.g + nextPoint.h
            }
        }
    }
}
const aStar = (startPosition, goalPoint) => {
    startPosition.g = 0
    startPosition.f = 0
    startPosition.h = 0
    openList.push(startPosition)
    while (openList.length > 0) {
        const currentSquare = openList.shift()
        // console.log(currentSquare.height)
        if (
            currentSquare.position.x === goalPoint.position.x &&
            currentSquare.position.y === goalPoint.position.y
        ) {
            let curr = currentSquare
            let steps = 0
            console.log('BACKTRACKING')
            while (curr.parent !== null) {
                steps++
                curr = curr.parent
            }
            console.log(
                `FOUND ${goalPoint.position.x} , ${goalPoint.position.y} in this many steps: `,
                steps
            )

            return steps
        }
        closedList.push(currentSquare)
        const currentP = currentSquare.position
        takeStep(currentSquare, { x: currentP.x + 1, y: currentP.y }, goalPoint)
        takeStep(currentSquare, { x: currentP.x, y: currentP.y + 1 }, goalPoint)
        takeStep(currentSquare, { x: currentP.x - 1, y: currentP.y }, goalPoint)
        takeStep(currentSquare, { x: currentP.x, y: currentP.y - 1 }, goalPoint)
        openList.sort(function (a, b) {
            return a.f - b.f
        })
    }
    return Infinity
}

// let startPos = maze[2][5]
const stepList = []
// console.log('HEJHEJ', aStar(startPos, maze[0][0]))
// initMaze()
/* const goalPoint = maze[20][0]
const steps = aStar(startPos, goalPoint)
console.log(steps) */
initGoalPoints()
goalPoints.forEach((goalPoint) => {
    initMaze()
    let startPos = maze[20][36]
    startPos.height = 123
    openList = []
    closedList = []

    const steps = aStar(startPos, goalPoint)
    stepList.push(steps)
})
console.log(Math.min(...stepList))
// console.log(maze[21][37])
