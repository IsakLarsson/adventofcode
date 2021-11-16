with open('2020/inputs/day6input.txt') as f:
    content = f.readlines()


# Python3 program to Split string into characters
def split(word):
    return [char for char in word]

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