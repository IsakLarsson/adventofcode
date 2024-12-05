const fs = require('fs')
const input = fs.readFileSync(`./input.txt`, 'utf8').trim().split('\n')

result = input.reduce((accumulator, currentLine) => {
    const matches = currentLine.match(/\d+/g)
    let n1 = matches[0]
    let calibrationNumber = 0
    if (matches.length >= 2) {
        const n2 = matches.at(-1)
        calibrationNumber = n1[0] + (n2 % 10)
    } else {
        const n2 = n1.at(-1)
        calibrationNumber = n1[0] + (n2 % 10)
    }
    return accumulator + parseInt(calibrationNumber)
}, 0)
console.log(result)
