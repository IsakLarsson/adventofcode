const fs = require('fs')
const input = fs.readFileSync(`./input.txt`, 'utf8').trim().split('\n')

result = input.reduce((accumulator, currentLine) => {
    const matches = currentLine.match(/\d+/g)
    console.log(matches)
    if (matches.length > 2) {
        const n1 = matches[0]
        const n2 = matches.at(-1)
        const newNumber = n1 + n2
        console.log(newNumber)
        return accumulator + parseInt(newNumber)
    } else {
        const n1 = matches[0]
        const n2 = matches[0]
        const newNumber = n1 + n2
        console.log(newNumber)
        return accumulator + parseInt(newNumber)
    }
}, 0)
console.log(result)
