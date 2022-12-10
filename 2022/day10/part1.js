const fs = require('fs')
const instructionLines = fs
    .readFileSync('./input.txt', 'utf8')
    .trim()
    .split('\n')

const registers = { x: 1 }
let cycleNumber = 1
let instructionQueue = []

const pullFromQueue = () => instructionQueue.shift()

const addToQueue = (instruction, value) => {
    if (instruction === 'noop') {
        instructionQueue.push(instruction)
    } else {
        const register = instruction.slice(3)
        instructionQueue.push('pause')
        instructionQueue.push({ register, value })
    }
}
const execute = (instruction) => {
    if (instruction === 'noop' || instruction === 'pause') {
        return
    }
    const { register, value } = instruction
    registers[register] += parseInt(value)
}
const loadQueue = () => {
    instructionLines.forEach((instructionLine) => {
        const [instruction, value] = instructionLine.split(' ')
        addToQueue(instruction, value)
    })
}

loadQueue()
const signals = []
while (instructionQueue.length > 0) {
    cycleNumber++
    const instruction = pullFromQueue()
    execute(instruction)
    if (cycleNumber % 40 == 20 || cycleNumber === 20) {
        signals.push(registers.x * cycleNumber)
    }
}
console.log(signals.reduce((acc, curr, index) => (acc = acc + curr), 0))
