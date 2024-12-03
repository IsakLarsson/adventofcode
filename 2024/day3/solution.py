import re 

input = open("input.txt", "r").read()

sum =0
for match in (re.findall("mul\\(\\d{1,3},\\d{1,3}\\)", input)):
    tup = tuple(re.findall("\\d{1,3}", match))
    sum += int(tup[0]) * int(tup[1])


print(sum)
