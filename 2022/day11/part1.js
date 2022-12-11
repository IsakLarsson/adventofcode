const fs = require('fs')
// const input = fs.readFileSync(`./${process.argv[2]}`, 'utf8').trim().split('\n')
const input = fs.readFileSync(`./input.txt`, 'utf8').trim().split('\n')

class Monkey {
    items = []
    inspections = 0
    constructor(startingItems, operation, operationValue, testValue, throwsTo) {
        this.items = startingItems
        this.operationValue = operationValue
        ;(this.operation = operation), (this.testValue = testValue)
        this.throwsTo = throwsTo
    }
    inspectItem() {
        let inspectedItem = this.items[0]
        if (this.operation === '*') {
            if (this.operationValue === 'old') {
                inspectedItem = Math.pow(inspectedItem, 2)
            } else {
                inspectedItem = inspectedItem * parseInt(this.operationValue)
            }
        } else if (this.operation === '+') {
            inspectedItem += parseInt(this.operationValue)
        }
        inspectedItem = Math.floor(inspectedItem / 3)
        this.items[0] = inspectedItem
        this.inspections++
    }
    test() {
        return this.items[0] % this.testValue === 0
    }
    throwNextItem() {
        return this.items.shift()
    }
    catchItem(item) {
        this.items.push(item)
    }
}
const monkeyList = []
const findMonkeys = () => {
    let monkeyNr = 0
    for (let lineNr = 0; lineNr < input.length; lineNr += 7) {
        const startingItems = input[lineNr + 1]
            .split(':')[1]
            .trim()
            .split(',')
            .map((nr) => parseInt(nr))

        const [operation, operationValue] = input[lineNr + 2]
            .split('=')[1]
            .trim()
            .split(' ')
            .slice(1)
        const testValue = parseInt(input[lineNr + 3].split('by')[1])
        const ifTrue = parseInt(input[lineNr + 4].split('monkey')[1])
        const ifFalse = parseInt(input[lineNr + 5].split('monkey')[1])
        monkeyList.push(
            new Monkey(startingItems, operation, operationValue, testValue, {
                ifTrue,
                ifFalse,
            })
        )
    }
}
findMonkeys()
const runSimulation = (rounds) => {
    for (let round = 0; round < rounds; round++) {
        for (let monkey = 0; monkey < monkeyList.length; monkey++) {
            const currentMonkey = monkeyList[monkey]
            while (currentMonkey.items.length > 0) {
                currentMonkey.inspectItem()
                if (currentMonkey.test()) {
                    monkeyList[currentMonkey.throwsTo.ifTrue].catchItem(
                        currentMonkey.throwNextItem()
                    )
                } else {
                    monkeyList[currentMonkey.throwsTo.ifFalse].catchItem(
                        currentMonkey.throwNextItem()
                    )
                }
            }
        }
    }
}
runSimulation(20)
let monkeyBusiness = 0
const inspectionList = []
monkeyList.forEach((monkey) => {
    inspectionList.push(monkey.inspections)
})
const first = Math.max.apply(null, inspectionList)
inspectionList.splice(inspectionList.indexOf(first), 1)
const second = Math.max.apply(null, inspectionList)
console.log(first * second, second)
