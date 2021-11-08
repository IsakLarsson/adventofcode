with open('Day1Input.txt') as f:
	lines = f.readlines()
	
for index in range(0,len(lines)):
	firstNumber = int(lines[index])
	for secondIndex in range(index, len(lines)):
		secondNumber = int(lines[secondIndex])
		for thirdIndex in range(secondIndex, len(lines)):
			thirdNumber = int(lines[thirdIndex])
			if firstNumber + secondNumber + thirdNumber == 2020:
				print(firstNumber, secondNumber, thirdNumber, firstNumber*secondNumber*thirdNumber)


f.close()