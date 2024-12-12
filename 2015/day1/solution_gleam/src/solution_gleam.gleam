import gleam/int
import gleam/io
import gleam/list
import gleam/string
import simplifile as file

fn read_file() -> Result(String, file.FileError) {
  file.read("../input/input.txt")
}

fn process_input(input: String) -> List(String) {
  input |> string.to_graphemes()
}

fn run_part_one(input: List(String)) -> Int {
  input
  |> list.fold(0, fn(acc, char) {
    case char {
      "(" -> acc + 1
      ")" -> acc - 1
      _ -> acc
    }
  })
}

fn run_part_two(input: List(String)) {
  input
  |> list.fold_until(0, fn(acc, char) {
    case acc, char {
      i, _ if acc < 0 -> list.Stop(i)
      _, "(" -> list.Continue(acc + 1)
      _, ")" -> list.Continue(acc - 1)
      _, _ -> list.Continue(acc)
    }
  })
}

pub fn main() {
  let input = read_file()
  case input {
    Ok(content) -> {
      let processed = content |> process_input()

      [run_part_one(processed), run_part_two(processed)]
      |> list.each(io.debug)
    }
    Error(_) -> panic as "invalid input"
  }
}
