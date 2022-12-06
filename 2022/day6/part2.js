const fs = require('fs')
const signal = fs.readFileSync('./input.txt', 'utf8')

let window = []
const checkDifferent = (window) => {
    return new Set(window).size === 14
}
for (let index = 0; index < signal.length; index++) {
    window.push(signal[index])
    if (window.length > 14) {
        window.splice(0, 1)
    }
    if (checkDifferent(window) === true) {
        console.log(index + 1)
        return
    }
}
