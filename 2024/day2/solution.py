input = open("input.txt", "r").read().splitlines()


safe_count=0
def is_ascending(numbers:list):
    if all(0 < (numbers[i]) - (numbers[i-1]) <=3 for i in range(1,len(numbers))):
        return True

def is_descending(numbers:list):
    if all(0 < (numbers[i-1]) - (numbers[i]) <= 3 for i in range(1,len(numbers))):
        return True

def part1():
    safe_count = 0
    for line in input:
        numbers = list(map(int,line.split()))
        if is_ascending(numbers) or is_descending(numbers):
            safe_count +=1

    print(safe_count)
def main():
    part1()


main()

