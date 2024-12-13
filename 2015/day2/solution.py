# Day 2 - Part 1 and 2
with open("./input/input.txt") as f:
    lines = f.readlines()

totalPaper = 0
totalRibbon = 0

for line in lines:
    l, w, h = map(int, line.split("x"))
    totalPaper += (2 * l * w + 2 * w * h + 2 * h * l) + min(l * w, w * h, h * l)
    totalRibbon += min(l, w, h) * 2 + sorted([l, w, h])[1] * 2 + (l * w * h)

# answers
print("Total wrapping paper needed:", totalPaper)
print("Total ribbon needed:", totalRibbon)
