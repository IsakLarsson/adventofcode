#open file and read the content
with open('2020/inputs/day3input.txt') as f:
	rows = f.readlines()

rowLength = len(rows[0].strip())-1
print(rowLength)

print(rows[0][30]) #zero indexed and 30 is the last index

treeCount = 0
xCoordinate = 1
def step(x):
	if x <=rowLength-3:
		x+=3
	else:
		x=2-(rowLength-x)
	return x

for rowNumber in range(1, len(rows)):
	xCoordinate = step(xCoordinate)
	print(rowNumber,xCoordinate, rows[rowNumber][xCoordinate])
	# print(rows[rowNumber][xCoordinate])
	if rows[rowNumber][xCoordinate] == '#':
		treeCount += 1
	
print(treeCount)