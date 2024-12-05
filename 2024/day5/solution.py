import re
# its like mahjong, save the tiles maybe and check for each pair of 
# reports if there is a corresponding tile in the saved tiles
# if there is save the series in a list 
# take the middle element of all saved lists

input_parts = open("./input/input.txt").read().split("\n\n")
tiles = input_parts[0].split("\n")
reports = input_parts[1].split("\n")
tiles_processed = []

for tile in tiles:
    tiles_processed.append(list(map(int, tile.split("|"))))


print([28,15] in tiles_processed)

sum=0
for i in range(0,len(reports)-1):
    numbers = reports[i].split(",")
    for j in range(len(numbers)-1):
        if [int(numbers[j]),int( numbers[j+1])] in tiles_processed:
            sum+=int(numbers[len(numbers)//2])

        # print(numbers[j],numbers[j+1])
        # print(numbers[j], numbers[j+1])
    # print([reports[i], reports[i+1]] in tiles_processed)
    # print(numbers)


print(sum)
