with open('2020/inputs/day6input.txt') as f:
    content = f.readlines()


# Python3 program to Split string into characters
def split(word):
    return [char for char in word]

def part1(content):
    answerSet = set()
    total = 0
    for line in content:
        line = line.strip()
        if line == '':
            total += len(answerSet)
            answerSet.clear()
        else:
            line = split(line)
            [answerSet.add(x) for x in line]

    total += len(answerSet)
    print(total)

def part2(content):
    answerSet = set()
    total = 0
    for line in content:
        line = line.strip()
        if line == '':
            total += len(answerSet)
            answerSet.clear()
        else:
            line = split(line)
            [answerSet.add(x) for x in line]
            
    total += len(answerSet)
    print(total)

part1(content)
part2(content)

