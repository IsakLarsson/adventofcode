with open('2021/inputs/day3input.txt') as f:
	content = f.readlines()

def binaryToDecimal(binary):
    binary1 = binary
    decimal, i, n = 0, 0, 0
    while(binary != 0):
        dec = binary % 10
        decimal = decimal + dec * pow(2, i)
        binary = binary//10
        i += 1
    print(decimal) 

gamma = []
for index in range(len(content[0].strip())):
	zeroCount = 0
	oneCount = 0
	for line in range(len(content)):
		binary = list(content[line].strip())
		if binary.pop(index) == '0':
			zeroCount += 1
		else:
			oneCount += 1
	gamma.append(0) if zeroCount > oneCount else gamma.append(1)

print(gamma)