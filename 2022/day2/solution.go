package main

import (
	"io/ioutil"
	"strings"
)

func main() {
	content, err := ioutil.ReadFile("./input.txt")
	if err != nil {
		panic("help")
	}
	lines := strings.Split(string(content), "\n")
	print(lines)
}
