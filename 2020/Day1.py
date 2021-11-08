with open('Day1Input.txt') as f:
	lines = f.readlines()
	
for index in range(0,len(lines)):
	firstNumber = int(lines[index])
	for number in range(index, len(lines)):
		secondNumber = int(lines[number])
		if firstNumber + secondNumber== 2020:
			print(firstNumber, secondNumber, firstNumber*secondNumber)

f.close()