with open('inputs/Day2Input.txt') as f:
	lines = f.readlines()
	
def part1():
	validCounter = 0
	for line in lines:
		policy, password = line.split(':')
		lowerRange, upperAndLetter = policy.split('-')
		upperRange, letter = upperAndLetter.split()
		if password.count(letter) >= int(lowerRange) and password.count(letter) <= int(upperRange):
			validCounter+=1

	print(validCounter)

def part2():
	validCounter = 0
	for line in lines:
		policy, password = line.split(':')
		firstPos, upperAndLetter = policy.split('-')
		secondPos, letter = upperAndLetter.split()
		print(password.find(letter), letter, password)jk
		# if (password.find(letter) == int(firstPos) and password.find(letter) != int(secondPos)) or (password.find(letter)+1 == int(secondPos) and password.find(letter)+1 != int(firstPos)):
		# 	print(firstPos,secondPos,letter,password)
		# 	validCounter+=1

	print(validCounter)

part1()
part2()

f.close()