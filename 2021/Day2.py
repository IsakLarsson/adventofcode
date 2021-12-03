with open('2021/inputs/day2input.txt') as f:
	content = f.readlines()


def part1():
	x = 0
	y = 0
	for line in content:
		direction, value = line.split()
		if direction == 'forward':
			x += int(value)
		elif direction == 'backward':
			x -= int(value)
		elif direction == 'up':
			y -= int(value)
		elif direction == 'down':
			y += int(value)
		
	print(x,y, x*y)

def part2():
	aim = 0
	x = 0
	y = 0
	for line in content:
		direction, value = line.split()
		if direction == 'forward':
			x += int(value)
			y += int(value)*aim
		elif direction == 'backward':
			x -= int(value)
		elif direction == 'up':
			aim -= int(value)
		elif direction == 'down':
			aim += int(value)
	
	print(x,y, x*y)
	

part1()
part2()