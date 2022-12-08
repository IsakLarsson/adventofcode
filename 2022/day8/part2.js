const fs = require('fs')
const treeLines = fs.readFileSync('./input.txt', 'utf8').split('\n')
// const treeLines = fs.readFileSync('./input2.txt', 'utf8').split('\n')
const width = treeLines[0].length
const height = treeLines.length - 1
let highestScore = 0

const checkNorth = (row, column, currentTreeHeight) => {
    let distance = 0
    for (let i = row - 1; i >= 0; i--) {
        distance++
        if (parseInt(treeLines[i].charAt(column)) >= currentTreeHeight) {
            return distance
        }
    }
    return row
}
const checkSouth = (row, column, currentTreeHeight) => {
    let distance = 0
    for (let i = row + 1; i < height; i++) {
        distance++
        if (parseInt(treeLines[i].charAt(column)) >= currentTreeHeight) {
            return distance
        }
    }
    return distance
}
const checkEast = (row, column, currentTreeHeight) => {
    let distance = 0
    for (let i = column + 1; i < width; i++) {
        distance++
        if (parseInt(treeLines[row].charAt(i)) >= currentTreeHeight) {
            return distance
        }
    }
    return distance
}
const checkWest = (row, column, currentTreeHeight) => {
    let distance = 0
    for (let i = column - 1; i >= 0; i--) {
        distance++
        if (parseInt(treeLines[row].charAt(i)) >= currentTreeHeight) {
            return distance
        }
    }
    return column
}

for (let row = 1; row < height - 1; row++) {
    for (let column = 1; column < width - 1; column++) {
        const currentTree = parseInt(treeLines[row].at(column))
        const distanceNorth = checkNorth(row, column, currentTree)
        const distanceSouth = checkSouth(row, column, currentTree)
        const distanceEast = checkEast(row, column, currentTree)
        const distanceWest = checkWest(row, column, currentTree)
        const scenicScore =
            distanceEast * distanceWest * distanceSouth * distanceNorth
        if (scenicScore > highestScore) {
            highestScore = scenicScore
        }
    }
}
console.log(highestScore)

//for each tree
