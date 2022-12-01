const fs = require('fs')

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    }
    split = data.split('\n')
    let total = 0
    let elvesTotals = []

    split.forEach((element) => {
        if (element === '') {
            // new elf
            elvesTotals.push(total)
            total = 0
            return
        }
        total += parseInt(element)
    })
    elvesTotals.sort(compare)
    console.log(
        elvesTotals.slice(-3).reduce((total, element) => (total += element))
    )
})
function compare(a, b) {
    return a < b ? -1 : 0
}
