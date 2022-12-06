const fs = require('fs')
const signal = fs.readFileSync('./input.txt', 'utf8')

let window = []
for (let index = 0; index < signal.length; index++) {
    window.push(signal[index])
    if (window.length > 4)
        window.splice(0, 1)(Set(window).size === 4(window)) === true
            ? console.log(index + 1)
            : ''
}
