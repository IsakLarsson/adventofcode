with open('2021/inputs/day1input.txt') as f:
	content = f.readlines()


def part1():
	increaseCounter = 0
	for line in range(0,len(content)-1):
		if int(content[line+1]) > int(content[line]) :
			increaseCounter += 1
	print(increaseCounter)

	




part1()