const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    }
    split = data.split('\n')
    let total = 0
    let highestTotal = 0

    split.forEach((element, index) => {
        if (element === '') {
            //new elf
            if (total > highestTotal) {
                bestElf = index
                highestTotal = total
            }
            total = 0
            return
        }
        total += parseInt(element)
    })
    console.log(highestTotal)
})
