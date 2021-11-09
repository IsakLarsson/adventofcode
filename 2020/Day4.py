#open file called day4input.txt and read the contents
with open('2020/inputs/day4input.txt') as f:
	content = f.readlines()

#if 2 \n's are in a row then there is a new line
print(content)

passports = [[]]

passportIndex = 0
for line in content:
	passports[passportIndex].append(line) 
	if line == '\n':
		#new passport
		passportIndex += 1

print(passports)