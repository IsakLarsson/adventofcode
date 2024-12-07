from typing import Tuple


def read_matrix(path: str) -> list[list[str]]:
    matrix = []
    rows = open(path, "r").read().strip().split("\n")
    for row in rows:
        matrix.append(list(row))
    return matrix


def find_character(matrix: list[list[str]], char: str) -> Tuple[int, int]:
    for row in range(len(matrix)):
        for col in range(len(matrix[row])):
            if matrix[row][col] == char:
                return (col, row)

    return (-1, -1)


def char_at(matrix: list[list[str]], point: Tuple[int, int]) -> str:
    (x, y) = point
    return matrix[y][x]


def is_wall_in_front(matrix: list[list[str]], index: Tuple[int, int]) -> bool:
    (x, y) = index
    match char_at(matrix, index):
        case "^":
            return char_at(matrix, (x, y - 1)) == "#"
        case ">":
            return char_at(matrix, (x + 1, y)) == "#"
        case "v":
            return char_at(matrix, (x, y + 1)) == "#"
        case "<":
            return char_at(matrix, (x - 1, y)) == "#"
        case _:
            return True


def rotate_guard(guard: str) -> str:
    match guard:
        case "^":
            return ">"
        case ">":
            return "v"
        case "v":
            return "<"
        case "<":
            return "^"
        case _:
            return guard


def move_guard(
    matrix: list[list[str]], current_position: Tuple[int, int]
) -> Tuple[list[list[str]], Tuple[int, int]]:
    (x, y) = current_position
    guard = char_at(matrix, current_position)
    if not is_wall_in_front(matrix, current_position):
        new_pos: Tuple[int, int]
        match guard:
            case "^":
                new_pos = (x, y - 1)
                # ew
                if next_move_is_out_of_bounds(matrix, new_pos):
                    return (matrix, (-1, -1))
                matrix[new_pos[1]][new_pos[0]] = guard
                matrix[y][x] = "X"
            case ">":
                new_pos = (x + 1, y)
                if next_move_is_out_of_bounds(matrix, new_pos):
                    return (matrix, (-1, -1))
                matrix[new_pos[1]][new_pos[0]] = guard
                matrix[y][x] = "X"
            case "v":
                new_pos = (x, y + 1)
                if next_move_is_out_of_bounds(matrix, new_pos):
                    return (matrix, (-1, -1))
                matrix[new_pos[1]][new_pos[0]] = guard
                matrix[y][x] = "X"
            case "<":
                new_pos = (x - 1, y)
                if next_move_is_out_of_bounds(matrix, new_pos):
                    return (matrix, (-1, -1))
                matrix[new_pos[1]][new_pos[0]] = guard
                matrix[y][x] = "X"
            case _:
                return (matrix, (x, y))
        return (matrix, new_pos)

    matrix[y][x] = rotate_guard(guard)
    return (matrix, (x, y))


def print_matrix(matrix: list[list[str]]):
    for row in matrix:
        print("".join(row))


def next_move_is_out_of_bounds(
    matrix: list[list[str]], new_pos: Tuple[int, int]
) -> bool:
    if (
        new_pos[0] < 0
        or new_pos[0] > len(matrix[0])
        or new_pos[1] < 0
        or new_pos[1] > len(matrix)
    ):
        return True
    return False


def count_steps(matrix: list[list[str]]) -> int:
    total = 0
    for row in matrix:
        total += row.count("X")
    return total


def part1():

    matrix = read_matrix("./input/input.txt")
    current_position = find_character(matrix, "^")
    done = False
    while not done:
        if current_position == (-1, -1):
            done = True
            print(count_steps(matrix) + 1)  # count the last position as well
            break

        print(current_position, end="\r")
        matrix, current_position = move_guard(matrix, current_position)

    print_matrix(matrix)


part1()
