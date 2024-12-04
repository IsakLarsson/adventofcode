#equivalent to this 
# for line in open("input.txt" , "r").readlines():
#     row = list(line.strip())
#     puzzle.append(row)
# puzzle = [list(line.strip()) for line in open("input.txt", "r").readlines()]

grid = open('input.txt').read().strip().split('\n')

max_col = len(grid[0])
max_row = len(grid)
cols = ['' for _ in range(max_col)]
rows = ['' for _ in range(max_row)]
fdiag = ['' for _ in range(max_row + max_col - 1)]
bdiag = ['' for _ in range(len(fdiag))]
min_bdiag = -max_row + 1

for x in range(max_col):
  for y in range(max_row):
    cols[x] += grid[y][x]
    rows[y] += grid[y][x]
    fdiag[x+y] += grid[y][x]
    bdiag[x-y-min_bdiag] += grid[y][x]

data = (cols+rows+fdiag+bdiag)

print( sum([x.count('XMAS')+x.count('SAMX') for x in data]) )
    

# for every character in each line 
#     if the character is an x 
#         check for mas in all directions
#             for each mas found, add one to the count

# checking for mas(point, xPoints=[], yPoints=[])
# trycatch the whole thing
#     mas = ["m", "a", "s"]
#     for x in range(point.x, xPoints.last)
#         for y in range(point.y, yPoints.last)
#             if point[x][y] != mas.first return False
#             else mas.pop
#     return True

    # for x in range point.x, point.x +3
    #     if x != "m" or x!= "a" or x!= "s"
    #         return False



