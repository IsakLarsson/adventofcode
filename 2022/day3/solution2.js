const fs = require('fs')
const rucksacks = fs
    .readFileSync('./input.txt', { encoding: 'utf8' })
    .split('\n')

const calcPriority = (character) => {
    if (character.charCodeAt(0) - 97 < 0) {
        //uppercase
        return character.charCodeAt(0) - 64 + 26
    } else {
        return character.charCodeAt(0) - 96
    }
}
let sum = 0
let line = 0
let group = []
rucksacks.forEach((groupString) => {
    if (groupString === '') {
        return
    }
    group.push(groupString)
    if (line % 3 === 2) {
        const first = [...group[0]]
        const second = group[1]
        const third = group[2]
        console.log(group)
        for (let index = 0; index <= first.length; index++) {
            if (second.includes(first[index]) && third.includes(first[index])) {
                console.log(first[index])
                sum += calcPriority(first[index])
                group = []
                line++
                return
            }
        }
    }

    line++
})
console.log(sum)
