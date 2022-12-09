const fs = require('fs')
const moves = fs.readFileSync('./input.txt', 'utf8').trim().split('\n')

/*
DO NOT judge me by this code, if you want a better solution, check my part2 which works for 
any ammount of knots
*/

let currentPosition = {
    head: {
        x: 0,
        y: 0,
    },
    tail: {
        x: 0,
        y: 0,
    },
}

const visitedPositions = []
visitedPositions.push({ x: 0, y: 0 })

const isPositionVisited = (newPosition) => {
    return visitedPositions.some(
        (element) => element.x === newPosition.x && element.y === newPosition.y
    )
}

const moveHorizontally = (direction) => {
    if (direction !== 'R' && direction !== 'L') {
        //these checks are just for my own stupidity
        throw new Error('Invalid direction for horizontal movement')
    }
    currentPosition = {
        ...currentPosition,
        head: {
            x:
                direction == 'R'
                    ? currentPosition.head.x + 1
                    : currentPosition.head.x - 1,
            y: currentPosition.head.y,
        },
    }
}
const moveVertically = (direction) => {
    if (direction !== 'U' && direction !== 'D') {
        throw new Error('Invalid direction for vertical movement')
    }
    currentPosition = {
        ...currentPosition,
        head: {
            x: currentPosition.head.x,
            y:
                direction === 'U'
                    ? currentPosition.head.y + 1
                    : currentPosition.head.y - 1,
        },
    }
}
const shouldTailMove = () => {
    //if tails x or y position differs by 2 or more from the head, move it
    if (
        Math.abs(currentPosition.head.x - currentPosition.tail.x) >= 2 ||
        Math.abs(currentPosition.head.y - currentPosition.tail.y) >= 2
    ) {
        return true
    }
    return false
}
const moveTail = (position) => {
    currentPosition = { ...currentPosition, tail: position }
    if (!isPositionVisited(position)) {
        visitedPositions.push(position)
    }
}
const moveRope = (direction, ammount) => {
    for (let i = 0; i < ammount; i++) {
        const headPositionBeforeMove = currentPosition.head

        switch (direction) {
            case 'U':
                moveVertically(direction)
                break
            case 'R':
                moveHorizontally(direction)
                break
            case 'D':
                moveVertically(direction)
                break
            case 'L':
                moveHorizontally(direction)
                break
            default:
                break
        }
        if (shouldTailMove()) {
            moveTail(headPositionBeforeMove)
        }
        console.log(currentPosition)
    }
}

moves.forEach((move) => {
    const [direction, ammount] = move.split(' ')
    moveRope(direction, parseInt(ammount))
})
console.log(visitedPositions.length)
