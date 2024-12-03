import re 

input = open("input.txt", "r").read()

sum =0
flag=True
for match in (re.findall("mul\\(\\d{1,3},\\d{1,3}\\)|do\\(\\)|don't\\(\\)", input)):
    if match == "do()":
        flag=True
    elif match == "don't()":
        flag=False
    else:
        if flag:
            tup = tuple(re.findall("\\d{1,3}", match))
            sum += int(tup[0]) * int(tup[1])


print(sum)
