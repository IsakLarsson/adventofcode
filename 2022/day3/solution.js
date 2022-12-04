const fs = require('fs')

const rucksacks = fs
    .readFileSync('./input.txt', { encoding: 'utf8' })
    .split('\n')

let sum = 0
rucksacks.forEach((rucksack) => {
    const firstCompartment = rucksack.slice(0, rucksack.length / 2)
    const secondCompartment = rucksack.slice(rucksack.length / 2)
    for (let index = 0; index <= firstCompartment.length; index++) {
        //search the second string for every letter in the first string
        const found =
            secondCompartment[secondCompartment.search(firstCompartment[index])]
        if (found !== undefined) {
            console.log(found)
            if (found.charCodeAt(0) - 97 < 0) {
                //uppercase
                sum += found.charCodeAt(0) - 64 + 26
            } else {
                sum += found.charCodeAt(0) - 96
            }
            return
        }
    }
})
console.log(sum)
