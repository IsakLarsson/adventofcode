package main

import (
	// "fmt"
	"io/ioutil"
	"strconv"
	"strings"
)

func main() {
	content, err := ioutil.ReadFile("./input.txt")
	if err != nil {
		panic("help")
	}
	total := 0
	highestTotal := 0
	lines := strings.Split(string(content), "\n")
	for _, line := range lines {
		if line == "" {
			if total > highestTotal {
				highestTotal = total
			}
			total = 0
		}
		value, _ := strconv.Atoi(line)
		total += value

	}
	println(highestTotal)
}
