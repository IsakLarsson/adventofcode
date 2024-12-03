import re 

input = open("input.txt", "r").read().split("\n")

mults =[]
sum =0

for line in input:
    for match in (re.findall("mul\\(\\d{1,3},\\d{1,3}\\)", line)):
        mults.append(tuple(re.findall("\\d{1,3}", match)))

for pair in mults:
   sum += int(pair[0]) * int(pair[1])
        

print(sum)
