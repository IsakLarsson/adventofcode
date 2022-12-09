const fs = require('fs')
const moves = fs.readFileSync('./input.txt', 'utf8').trim().split('\n')
/*
 * This is a general solution, it works for any number of knots
 */
const NR_KNOTS = 10
const visitedPositions = []
visitedPositions.push({ x: 0, y: 0 })
class Knot {
    constructor() {
        this.position = {
            x: 0,
            y: 0,
        }
    }
    changePositionBy(x, y) {
        this.position.x += x
        this.position.y += y
    }
}

const isPositionVisited = (position) => {
    return visitedPositions.some(
        (element) => element.x === position.x && element.y === position.y
    )
}

const moveHead = (knot, direction) => {
    if (direction === 'R' || direction === 'L') {
        direction === 'R'
            ? knot.changePositionBy(1, 0)
            : knot.changePositionBy(-1, 0)
    } else {
        direction === 'U'
            ? knot.changePositionBy(0, 1)
            : knot.changePositionBy(0, -1)
    }
}

const getDistanceDifference = (nextKnot, knot) => {
    const xDifference = nextKnot.position.x - knot.position.x
    const yDifference = nextKnot.position.y - knot.position.y
    return [xDifference, yDifference]
}

const shouldKnotMove = (nextKnot, knot) => {
    const [xDifference, yDifference] = getDistanceDifference(nextKnot, knot)
    if (Math.abs(xDifference) >= 2 || Math.abs(yDifference) >= 2) {
        return true
    }
    return false
}

const moveKnot = (nextKnot, knot) => {
    const [xDifference, yDifference] = getDistanceDifference(nextKnot, knot)
    if (knot.position.x == nextKnot.position.x) {
        //move vertically towards next
        knot.changePositionBy(0, yDifference > 0 ? 1 : -1)
    } else if (knot.position.y == nextKnot.position.y) {
        //move horizontally towards next
        knot.changePositionBy(xDifference > 0 ? 1 : -1, 0)
    } else {
        //move verticall and horizontally
        knot.changePositionBy(
            xDifference > 0 ? 1 : -1,
            yDifference > 0 ? 1 : -1
        )
    }
}
const moveRope = (direction, ammount) => {
    for (let i = 0; i < ammount; i++) {
        moveHead(rope[0], direction)
        for (let knot = 0; knot < rope.length - 1; knot++) {
            if (shouldKnotMove(rope[knot], rope[knot + 1])) {
                moveKnot(rope[knot], rope[knot + 1])
            } else {
                break
            }
        }
        const tailPosition = rope[NR_KNOTS - 1].position
        if (!isPositionVisited(tailPosition)) {
            visitedPositions.push({ ...tailPosition })
        }
    }
}

let rope = []
for (let i = 0; i < NR_KNOTS; i++) {
    rope.push(new Knot())
}
moves.forEach((move) => {
    const [direction, ammount] = move.split(' ')
    moveRope(direction, parseInt(ammount))
})
console.log(visitedPositions.length)
