const fs = require('fs')
const lines = fs.readFileSync('./input.txt', 'utf8').split('\n')

const fileSystem = { size: 0 }
let currentDir = fileSystem

const cd = (directory) => {
    if (directory === '/') {
        currentDir = fileSystem
    } else if (directory === '..') {
        currentDir = currentDir.__parent
    } else {
        currentDir = currentDir[directory]
    }
}

const ls = () => {
    //ls command
    // fileSystem['root'] = { name: 'root', subDirectories: [], size: 0 }
}

const command = (inputCommand, arg) => {
    switch (inputCommand) {
        case 'cd':
            cd(arg)
            break
        case 'ls':
            ls()
            break
        default:
            break
    }
}

const dir = (sizeOrDir, dirName) => {
    if (!currentDir) {
        return
    }
    if (sizeOrDir === 'dir') {
        //its a dir
        currentDir[dirName] = { __parent: currentDir, size: 0 }
        return
    }
    //its a size
    currentDir.size += parseInt(sizeOrDir)
}
lines.forEach((line) => {
    if (line === '') {
        return
    }
    const [arg1, arg2, arg3] = line.split(' ')
    if (arg1 === '$') {
        command(arg2, arg3)
    } else {
        dir(arg1, arg2)
    }
})

/*
The code was fine up until here, now the shitcode starts
*/

const sizesSmallerThan100k = []

const getSizeOfDirectory = (directory) => {
    let totalSize = 0

    for (const key in directory) {
        if (key === '__parent') {
            continue
        }
        const entry = directory[key]
        if (typeof entry === 'object') {
            totalSize += getSizeOfDirectory(entry)
        } else {
            totalSize += entry
        }
    }
    if (totalSize <= 100000) {
        sizesSmallerThan100k.push(totalSize)
    }
    return totalSize
}
// console.log(fileSystem)
console.log(getSizeOfDirectory(fileSystem))
let answer = 0

const traverse = (fileSystem) => {
    let sum = 0
    for (const directory in fileSystem) {
        if (directory === '__parent') {
            continue
        }
        const entry = fileSystem[directory]
        if (typeof entry === 'object') {
            sum = getSizeOfDirectory(entry)
            if (sum <= 100000) {
                answer += sum
            }
            traverse(directory)
        }
    }
}
traverse(fileSystem)
console.log(answer)
console.log(
    sizesSmallerThan100k.reduce((acc, curr, index) => {
        if ((index <= sizesSmallerThan100k.length / 2) - 1) {
            acc += curr
        }
        return acc
    })
) //tired of fucking with the recursion shit
