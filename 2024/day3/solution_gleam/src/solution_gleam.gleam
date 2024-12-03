import gleam/int
import gleam/io
import gleam/list
import gleam/regexp as regex
import simplifile as file

type Operation {
  Mult(Int, Int)
  Do
  Dont
  Noop
}

fn load_contents() -> Result(String, file.FileError) {
  case file.read("../input.txt") {
    Ok(contents) -> Ok(contents)
    Error(err) -> Error(err)
  }
}

fn find_operations(string: String) -> List(regex.Match) {
  let assert Ok(mul_reg) =
    regex.from_string("mul\\(\\d{1,3},\\d{1,3}\\)|do\\(\\)|don't\\(\\)")

  regex.scan(mul_reg, string)
}

fn string_to_operation(input: String) -> Operation {
  let assert Ok(re) = regex.from_string("\\d{1,3}")
  case input {
    "do()" -> Do
    "don't()" -> Dont
    mult ->
      case regex.scan(re, mult) {
        [a, b] ->
          case int.parse(a.content), int.parse(b.content) {
            Ok(x), Ok(y) -> Mult(x, y)
            _, _ -> Noop
          }
        _ -> Noop
      }
  }
}

pub fn main() {
  case load_contents() {
    Ok(file) ->
      find_operations(file)
      |> list.fold(0, fn(acc, match) {
        case match {
          regex.Match(content, _) ->
            case content |> string_to_operation {
              Do -> acc
              Dont -> acc
              Mult(a, b) -> acc + { a * b }
              Noop -> acc
            }
        }
      })
    Error(_) -> panic as "Error"
  }
}
