import gleeunit
import gleeunit/should
import solution_gleam

pub fn main() {
  gleeunit.main()
}

// gleeunit test functions end in `_test`
pub fn contains_three_vowels_test() {
  "aou"
  |> solution_gleam.contains_three_vowels()
  |> should.be_ok()
}

pub fn should_fail_fewer_vowels_test() {
  "ao"
  |> solution_gleam.contains_three_vowels()
  |> should.be_error()
}

pub fn contains_adjacent_letters_test() {
  "abcddefg"
  |> solution_gleam.contains_double()
  |> should.be_ok()
}

pub fn should_fail_no_adjacent_letters_test() {
  "abcdefg"
  |> solution_gleam.contains_double()
  |> should.be_error()
}

pub fn contains_no_bad_strings_test() {
  "aaccefg"
  |> solution_gleam.check_bad_strings()
  |> should.be_ok()
}

pub fn should_fail_contains_bad_strings_test() {
  "abcdefg"
  |> solution_gleam.check_bad_strings()
  |> should.be_error()
}
