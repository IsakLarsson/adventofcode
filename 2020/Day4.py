#open file called day4input.txt and read the contents
with open('2020/inputs/day4input.txt') as f:
	content = f.readlines()

passports = []
requiredFields = {'eyr', 'hgt','hcl','pid', 'byr', 'iyr', 'ecl'} 

validPasstports = 0
foundFields = set()
for line in content:

	if line == '\n':
		#new passport
		if requiredFields.issubset(foundFields):
			validPasstports += 1
		foundFields.clear()

	else:
		splitLine = line.split(' ')
		[foundFields.add(x.split(':')[0]) for x in splitLine]
		

print(validPasstports)