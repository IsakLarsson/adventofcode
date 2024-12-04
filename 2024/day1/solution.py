input = open("input.txt", "r").read().split()
list1 = []
list2 = []
for i in range(0, len(input)):
    if i % 2 ==0:
        list1.append(int(input[i]))
    else :
        list2.append(int(input[i]))
    

list1.sort()
list2.sort()
sum = 0

for i in range(0, len(list1)):
    diff = abs(list1[i] - list2[i])
    sum += diff

print(sum)

#part 2 

total = 0
for x in list1:
    total += x * list2.count(x)

print(total)
