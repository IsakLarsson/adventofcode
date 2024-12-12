import gleeunit
import gleeunit/should
import solution_gleam

pub fn main() {
  gleeunit.main()
}

pub fn calculate_non_uniform_package_test() {
  solution_gleam.Package(width: 2, height: 3, length: 4)
  |> solution_gleam.calculate_area()
  |> should.equal(58)
}
