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

pub fn calculate_ribbon_test() {
  solution_gleam.Package(width: 2, height: 3, length: 4)
  |> solution_gleam.calculate_ribbon()
  |> should.equal(34)
}

pub fn calculate_ribbon_two_test() -> Nil {
  solution_gleam.Package(width: 1, height: 1, length: 10)
  |> solution_gleam.calculate_ribbon()
  |> should.equal(14)

  solution_gleam.Package(width: 1, height: 1, length: 1)
  |> solution_gleam.calculate_ribbon()
  |> should.equal(5)
}

pub fn calculate_ribbon_three_test() -> Nil {
  solution_gleam.Package(width: 2, height: 2, length: 15)
  |> solution_gleam.calculate_ribbon()
  |> should.equal(68)
}

pub fn calculate_volume_test() -> Nil {
  solution_gleam.Package(width: 26, height: 30, length: 2)
  |> solution_gleam.package_volume()
  |> should.equal(1560)
}

pub fn find_smallest_side_test() -> Nil {
  solution_gleam.Package(width: 26, height: 30, length: 2)
  |> solution_gleam.find_two_smallest_sides()
  |> should.equal([2, 26])
}

pub fn calculate_real_ribbon_test() -> Nil {
  solution_gleam.Package(width: 26, height: 30, length: 2)
  |> solution_gleam.calculate_ribbon()
  |> should.equal(1616)
}
