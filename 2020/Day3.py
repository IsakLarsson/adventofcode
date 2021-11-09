#open file and read the content
with open('2020/inputs/day3input.txt') as f:
	rows = f.readlines()

rowLength = len(rows[0].strip())-1
print(rowLength)

print(rows[0][30]) #zero indexed and 30 is the last index

xStep = 1 #steps in X diection
yStep = 2 #steps in Y direction

treeCount = 0
xCoordinate = 0
def step(x, stepLength):
	if x <=rowLength-stepLength:
		x+=stepLength
	else:
		x=(stepLength-1)-(rowLength-x)
	return x

for rowNumber in range(1, len(rows)):
	if rowNumber % 2 == 0 and rowNumber != 0:
		xCoordinate = step(xCoordinate,xStep)
		print(rowNumber,xCoordinate, rows[rowNumber][xCoordinate])
		if rows[rowNumber][xCoordinate] == '#':
			treeCount += 1
	
print(treeCount)