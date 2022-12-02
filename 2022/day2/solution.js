const fs = require('fs')

const resultTable = {
    X: {
        A: 3 + 1,
        B: 0 + 1,
        C: 6 + 1,
    },
    Y: {
        A: 6 + 2,
        B: 3 + 2,
        C: 0 + 2,
    },
    Z: {
        A: 0 + 3,
        B: 6 + 3,
        C: 3 + 3,
    },
}
const checkWin = (player, opponent) => {
    if (player === '' || opponent === '') {
        return 0
    }
    return resultTable[player][opponent]
}
const turns = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n')

let totalScore = 0
turns.forEach((turn) => {
    const moves = turn.split(' ')
    totalScore += checkWin(moves[1], moves[0])
})
console.log(totalScore)
