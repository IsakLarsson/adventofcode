import gleam/int
import gleam/io
import gleam/list
import gleam/regexp as regex
import gleam/result
import gleam/string
import simplifile as file

const disallowed_strings = ["ab", "cd", "pq", "xy"]

pub fn contains_three_vowels(input: String) -> Result(String, Nil) {
  let assert Ok(re) = regex.from_string("[aeiou]")
  case regex.scan(re, input) |> list.length() {
    x if x >= 3 -> Ok(input)
    _ -> Error(Nil)
  }
}

pub fn contains_double(input: String) -> Result(String, Nil) {
  let contains =
    input
    |> string.to_graphemes()
    |> list.window(2)
    |> list.any(fn(pair) {
      case pair {
        [a, b] if a == b -> True
        _ -> False
      }
    })
  case contains {
    True -> Ok(input)
    False -> Error(Nil)
  }
}

pub fn check_bad_strings(input: String) -> Result(String, Nil) {
  let contains =
    input
    |> string.to_graphemes()
    |> list.window(2)
    |> list.any(fn(pair) {
      list.contains(disallowed_strings, pair |> string.join(""))
    })
  case contains {
    True -> Error(Nil)
    False -> Ok(input)
  }
}

fn check_string_nice(input: String) -> Bool {
  contains_three_vowels(input)
  |> result.try(contains_double(_))
  |> result.try(check_bad_strings(_))
  |> result.is_ok()
}

pub fn main() {
  let input = file.read("../input/input.txt")
  case input {
    Ok(content) -> {
      let strings = content |> string.split("\n")
      strings
      |> list.count(fn(string) { check_string_nice(string) })
      |> int.to_string()
      |> io.println()
    }
    Error(_) -> panic as "Bad input file"
  }
}
