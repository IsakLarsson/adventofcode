const fs = require('fs')
const signal = fs.readFileSync('./input.txt', 'utf8')

let window = []
const findSignal = (windowSize) => {
    for (let index = 0; index < signal.length; index++) {
        window.push(signal[index])
        if (window.length > windowSize) {
            window.splice(0, 1)
            if (new Set(window).size === windowSize) {
                return console.log(index + 1)
            }
        }
    }
}
findSignal(4)
findSignal(14)
