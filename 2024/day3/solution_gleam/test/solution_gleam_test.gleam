import gleeunit
import gleeunit/should
import solution_gleam

pub fn main() {
  gleeunit.main()
}

// gleeunit test functions end in `_test`
pub fn aoc_test() {
  solution_gleam.main()
  |> should.equal(167_090_022)
}
