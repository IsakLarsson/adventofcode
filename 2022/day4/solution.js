const fs = require('fs')

const pairs = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n')

let overlaps = 0
pairs.forEach((pair) => {
    if (pair === '') {
        return
    }
    const [firstElf, secondElf] = pair.split(',')
    let [firstStart, firstEnd] = firstElf.split('-').map((val) => parseInt(val))
    let [secondStart, secondEnd] = secondElf
        .split('-')
        .map((val) => parseInt(val))

    if (firstStart >= secondStart && firstEnd <= secondEnd) {
        // if(firstEnd <= secondEnd){ why does this not work????
        //     overlaps++
        // }
        //then we have a find
        overlaps++
    } else if (secondStart >= firstStart && secondEnd <= firstEnd) {
        overlaps++
    }
})

let overlaps2 = 0
pairs.forEach((pair) => {
    if (pair === '') {
        return
    }
    const [firstElf, secondElf] = pair.split(',')
    let [firstStart, firstEnd] = firstElf.split('-').map((val) => parseInt(val))
    let [secondStart, secondEnd] = secondElf
        .split('-')
        .map((val) => parseInt(val))

    if (firstStart >= secondStart && firstEnd <= secondEnd) {
        overlaps2++
    } else if (secondStart >= firstStart && secondEnd <= firstEnd) {
        overlaps2++
    } else if (secondStart <= firstStart && firstStart <= secondEnd) {
        overlaps2++
    } else if (secondStart <= firstEnd && firstEnd <= secondEnd) {
        overlaps2++
    }
})
console.log(overlaps, overlaps2)
