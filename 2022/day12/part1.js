const fs = require('fs')
const rows = fs.readFileSync(`./input.txt`, 'utf8').trim().split('\n')

// const rows = fs.readFileSync(`./input2.txt`, 'utf8').trim().split('\n')
let maze = new Array(rows.length)
class Point {
    f = Infinity
    g = Infinity
    h = Infinity
    constructor(x, y) {
        this.position = { x: x, y: y }
        this.visited = false
        this.parent = null
        this.height = rows[y][x].charCodeAt(0)
    }
}
const initArray = () => {
    for (let row = 0; row < rows.length; row++) {
        maze[row] = new Array()
        for (let col = 0; col < rows[0].length; col++) {
            maze[row].push(new Point(col, row))
        }
    }
}
initArray()
let goalPoint = maze[0][0]
// console.log(maze[23][23].position)
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
                element.position.x === nextP.x && element.position.y === nextP.y //it doesnt exist but it still finds it??
        )
    ) {
        return true
    }
    return false
}
const takeStep = (currentSquare, nextP) => {
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
        nextHeight === 97
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
const calcCost = (position) => {}
const aStar = (startPosition) => {
    startPosition.g = 0
    startPosition.f = 0
    startPosition.h = 0
    openList.push(startPosition)
    while (openList.length > 0) {
        const currentSquare = openList.shift()
        console.log(currentSquare.height)
        if (currentSquare.height === 97) {
            let curr = currentSquare
            let steps = 0
            console.log('BACKTRACKING')
            while (curr.parent !== null) {
                steps++
                console.log(curr.height)
                curr = curr.parent
            }
            console.log('FOUND a in this many steps: ', steps)

            return steps
        }
        closedList.push(currentSquare)
        const currentP = currentSquare.position
        takeStep(currentSquare, { x: currentP.x + 1, y: currentP.y })
        takeStep(currentSquare, { x: currentP.x, y: currentP.y + 1 })
        takeStep(currentSquare, { x: currentP.x - 1, y: currentP.y })
        takeStep(currentSquare, { x: currentP.x, y: currentP.y - 1 })
        openList.sort(function (a, b) {
            return a.f - b.f
        })
    }
}

let startPos = maze[20][36]
startPos.height = 123
const stepList = []
for (let row = 0; row < rows.length; row++) {
    goalPoint = maze[row][0]
    initArray()
    stepList.push(aStar(startPos))
}
console.log(stepList)
// console.log(maze[21][37])
