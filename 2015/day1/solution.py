input = open("./input/input.txt", "r").read()

acc = 0
for i in range(len(input)):
    if input[i] == "(":
        acc += 1
    elif input[i] == ")":
        acc -= 1
    if acc < 0:
        print(i + 1)
        break
