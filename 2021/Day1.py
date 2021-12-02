with open('2021/inputs/day1input.txt') as f:
	content = f.readlines()


def part1():
	increaseCounter = 0
	for line in range(0,len(content)-1):
		if int(content[line+1]) > int(content[line]) :
			increaseCounter += 1
	print(increaseCounter)

def part2():
	increaseCounter = 0
	windowSize = 3
	total = 0
	windowSum = 0
	for line in range(len(content)-windowSize + 1):
		seq = content[line:line+windowSize]
		total = sum([int(x) for x in seq])
		if total > windowSum:
			increaseCounter += 1
		windowSum = total
		
	print(increaseCounter - 1)

part1()
part2()