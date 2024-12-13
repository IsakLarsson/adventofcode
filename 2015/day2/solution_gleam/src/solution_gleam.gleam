import gleam/int
import gleam/io
import gleam/list
import gleam/result
import gleam/string
import simplifile as file

pub type Package {
  Package(length: Int, width: Int, height: Int)
}

pub fn package_volume(p: Package) -> Int {
  p.height * p.width * p.length
}

pub fn find_two_smallest_sides(p: Package) -> List(Int) {
  [p.length, p.height, p.width]
  |> list.sort(int.compare)
  |> list.take(2)
}

pub fn calculate_ribbon(p: Package) -> Int {
  case p |> find_two_smallest_sides() {
    [x, y] -> 2 * { x + y } + package_volume(p)
    _ -> 0
  }
}

pub fn calculate_area(p: Package) -> Int {
  let assert Ok(smallest) =
    find_two_smallest_sides(p)
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

fn sum_ribbon(packages: List(Package)) -> Int {
  packages |> list.fold(0, fn(acc, package) { acc + calculate_ribbon(package) })
}

pub fn main() {
  let input = file.read("../input/input.txt")
  case input {
    Ok(content) -> {
      let processed =
        content
        |> string.split("\n")
        |> parse_packages()

      processed
      |> sum_dimensions()
      |> int.to_string()
      |> io.println()

      processed
      |> sum_ribbon()
      |> int.to_string()
      |> io.println()
    }
    Error(_) -> panic as "Invalid input"
  }
}
