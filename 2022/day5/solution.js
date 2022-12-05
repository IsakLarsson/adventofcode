const fs = require('fs')

const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')
const operations = lines.slice(10)
let crates = [
    ['F', 'H', 'M', 'T', 'V', 'L', 'D'],
    ['P', 'N', 'T', 'C', 'J', 'G', 'Q', 'H'],
    ['H', 'P', 'M', 'D', 'S', 'R'],
    ['F', 'V', 'B', 'L'],
    ['Q', 'L', 'G', 'H', 'N'],
    ['P', 'M', 'R', 'G', 'D', 'B', 'W'],
    ['Q', 'L', 'H', 'C', 'R', 'N', 'M', 'G'],
    ['W', 'L', 'C'],
    ['T', 'M', 'Z', 'J', 'Q', 'L', 'D', 'R'],
]
for (let i = 0; i < 9; i++) {
    crates[i].reverse() // too lazy to rewrite the crates in the correct order
}
operations.forEach((line) => {
    if (line === '') {
        return
    }
    const instructions = line.split(' ')
    const nrOfCrates = parseInt(instructions[1])
    const from = parseInt(instructions[3])
    const to = parseInt(instructions[5])
    console.log(nrOfCrates, from, to)

    for (let i = 0; i < nrOfCrates; i++) {
        crates[to - 1].push(crates[from - 1].pop())
    }
})
console.log(crates)
