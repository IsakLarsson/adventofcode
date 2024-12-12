import gleam/int
import gleam/io
import gleam/list
import gleam/result
import gleam/string
import simplifile as file

pub type Package {
  Package(length: Int, width: Int, height: Int)
}

//formula 2*l*w + 2*w*h + 2*h*l
pub fn calculate_area(p: Package) -> Int {
  let assert Ok(smallest) =
    [p.length, p.height, p.width]
    |> list.sort(int.compare)
    |> list.take(2)
    |> list.reduce(fn(x, y) { x * y })

  2
  * { p.width * p.length + p.width * p.height + p.height * p.length }
  + smallest
}

fn string_to_package(line: String) -> Result(Package, Nil) {
  case line |> string.split("x") |> list.map(fn(x) { int.parse(x) }) {
    [Ok(l), Ok(w), Ok(h)] -> Ok(Package(l, w, h))
    _ -> Error(Nil)
  }
}

fn parse_packages(input: List(String)) -> List(Package) {
  input
  |> list.map(fn(dimensions) { string_to_package(dimensions) })
  |> result.values()
}

fn sum_dimensions(packages: List(Package)) -> Int {
  packages
  |> list.fold(0, fn(acc, package) { acc + { calculate_area(package) } })
}

pub fn main() {
  let input = file.read("../input/input.txt")
  case input {
    Ok(content) ->
      content
      |> string.split("\n")
      |> io.debug()
      |> parse_packages()
      |> sum_dimensions()
      |> int.to_string()
      |> io.print()
    Error(_) -> io.print("-1")
  }
}
