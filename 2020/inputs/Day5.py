from math import floor, ceil

with open('2020/inputs/day5input.txt') as f:
	content = f.readlines()
idList=[]
maxValue = 0
for line in content:
	min = 0
	max = 127
	minC = 0
	maxC = 7
	row = 0
	col = 0
	
	for letter in line:
		if letter == 'F':
			if (max - min) == 1:
				row = min
			else:
				max = floor((max+min)/2)
		elif letter == 'B':
			if (max - min) == 1:
				row = max
			else:	
				min = ceil((max+min)/2)
		elif letter == 'R':
			if (maxC - minC) == 1:
				col = maxC
			else:
				minC = ceil((maxC+minC)/2)
		elif letter == 'L':
			if (maxC - minC) == 1:
				col = minC
			else:
				maxC = floor((maxC+minC)/2)
	
	maxValue = row * 8 + col
	idList.append(maxValue)
idList.sort()

print(set(range(idList[0], idList[-1])).difference(set(idList)))

print(idList)