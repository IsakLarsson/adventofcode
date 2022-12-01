const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    }
    split = data.split('\n')
    let total = 0
    let elvesTotals = []
    let highestTotal = 0

    split.forEach((element, index) => {
        if (element === '') {
            elvesTotals.push(total)
            total = 0
            return
        }
        total += parseInt(element)
    })
    elvesTotals.sort()
    console.log(elvesTotals.slice(-3))
})
