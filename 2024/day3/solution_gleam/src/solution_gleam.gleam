import gleam/int
import gleam/io
import gleam/list
import gleam/regexp as regex
import gleam/string
import simplifile as file

fn load_contents() -> Result(String, file.FileError) {
  case file.read("../input.txt") {
    Ok(contents) -> Ok(contents)
    Error(err) -> Error(err)
  }
}

fn find_operations(string: String) -> List(regex.Match) {
  let assert Ok(mul_reg) = regex.from_string("mul\\(\\d{1,3},\\d{1,3}\\)")

  regex.scan(mul_reg, string)
}

fn clean_up_matches(matches: List(regex.Match)) {
  let assert Ok(first_part) = regex.from_string("mul\\(")
  let assert Ok(second_part) = regex.from_string("\\)")

  matches
  |> list.map(fn(match) { regex.replace(first_part, match.content, "") })
  |> list.map(fn(match) { regex.replace(second_part, match, "") })
  |> list.map(string.split(_, ","))
  |> list.map(fn(match) { list.filter_map(match, int.parse) })
}

fn multiply(pair: List(Int)) -> Int {
  case pair {
    [a, b] -> a * b
    _ -> 0
  }
}

pub fn main() {
  case load_contents() {
    Ok(file) ->
      find_operations(file)
      |> clean_up_matches()
      |> list.fold(0, fn(acc, sublist) { acc + multiply(sublist) })
    Error(_) -> panic as "Error"
  }
}
