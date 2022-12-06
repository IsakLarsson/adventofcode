const fs = require('fs')
const signal = fs.readFileSync('./input.txt', 'utf8')

let window = []
const checkDifferent = (window) => {
    return new Set(window).size === 4
}
for (let index = 0; index < signal.length; index++) {
    window.push(signal[index])
    if (window.length > 4) {
        window.splice(0, 1)
    }
    if (checkDifferent(window) === true) {
        console.log(index + 1)
        return
    }
}
