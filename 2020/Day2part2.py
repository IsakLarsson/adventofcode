with open('2020/inputs/day2input.txt') as f:
	lines = f.readlines()

validCount = 0
for line in lines:
	policy, password = line.split(':')
	firstIndex, secondPart = policy.split('-')
	secondIndex, letter = secondPart.split()
	if (password[int(firstIndex)] == letter and password[int(secondIndex)] != letter) or (password[int(firstIndex)] != letter and password[int(secondIndex)] == letter):
		validCount += 1
	
print(validCount)