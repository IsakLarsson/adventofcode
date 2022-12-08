const fs = require('fs')
const treeLines = fs.readFileSync('./input.txt', 'utf8').split('\n')
// const treeLines = fs.readFileSync('./input2.txt', 'utf8').split('\n')
const width = treeLines[0].length
const height = treeLines.length - 1
let visibleTrees = width * 2 + height * 2 - 4

const checkNorth = (row, column, currentTreeHeight) => {
    for (let i = 0; i <= row - 1; i++) {
        if (parseInt(treeLines[i].charAt(column)) >= currentTreeHeight) {
            return false
        }
    }
    return true
}
const checkSouth = (row, column, currentTreeHeight) => {
    for (let i = row + 1; i < height; i++) {
        if (parseInt(treeLines[i].charAt(column)) >= currentTreeHeight) {
            return false
        }
    }
    return true
}
const checkEast = (row, column, currentTreeHeight) => {
    for (let i = column + 1; i < width; i++) {
        if (parseInt(treeLines[row].charAt(i)) >= currentTreeHeight) {
            return false
        }
    }
    return true
}
const checkWest = (row, column, currentTreeHeight) => {
    for (let i = column - 1; i >= 0; i--) {
        if (parseInt(treeLines[row].charAt(i)) >= currentTreeHeight) {
            return false
        }
    }
    return true
}

for (let row = 1; row < height - 1; row++) {
    for (let column = 1; column < width - 1; column++) {
        const currentTree = parseInt(treeLines[row].at(column))
        let currentRow = treeLines[row]
        let visibleNorth = checkNorth(row, column, currentTree)
        let visibleSouth = checkSouth(row, column, currentTree)
        let visibleEast = checkEast(row, column, currentTree)
        let visibleWest = checkWest(row, column, currentTree)
        console.log(currentTree, visibleSouth)
        if (visibleNorth || visibleEast || visibleSouth || visibleWest) {
            visibleTrees++
        }
    }
}

console.log(visibleTrees)
//for each tree
