const fs = require('fs')
const rucksacks = fs
    .readFileSync('./input.txt', { encoding: 'utf8' })
    .split('\n')

let sum = 0
let line = 0
rucksacks.forEach((rucksack) => {
    let group = []
    group.push(rucksack)
    console.log(group)
    if (line % 3 === 0) {
        //start new group
        group = []
        return
    }
    line++
})
console.log(sum)
