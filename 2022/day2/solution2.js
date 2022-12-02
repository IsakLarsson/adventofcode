const fs = require('fs')
const scissorScore = 3
const paperScore = 2
const rockScore = 1
const resultTable = {
    //Lose
    X: {
        A: 0 + scissorScore,
        B: 0 + rockScore,
        C: 0 + paperScore,
    },
    //Draw
    Y: {
        A: 3 + rockScore,
        B: 3 + paperScore,
        C: 3 + scissorScore,
    },
    //Win
    Z: {
        A: 6 + paperScore,
        B: 6 + scissorScore,
        C: 6 + rockScore,
    },
}
const checkWin = (player, opponent) => {
    if (player === '' || opponent === '') {
        return 0
    }
    return resultTable[player][opponent]
}
const turns = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n')

const totalScore = turns.reduce(
    (acc, turn) => acc + checkWin(turn.split(' ')[1], turn.split(' ')[0]),
    0
)

console.log(totalScore)
