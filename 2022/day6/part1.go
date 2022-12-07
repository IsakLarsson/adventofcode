package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// Open the input file
	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	// Create a new scanner to read the file
	scanner := bufio.NewScanner(file)

	// Read in the first line of the file
	if scanner.Scan() {
		line := scanner.Text()

		// Check for 14 unique consecutive characters in the line
		if len(line) >= 14 {
			for i := 0; i <= len(line)-14; i++ {
				charSet := make(map[rune]bool)
				for _, ch := range line[i : i+14] {
					charSet[ch] = true
				}
				if len(charSet) == 14 {
					fmt.Println("Found 14 unique consecutive characters!")
					fmt.Println(i)
					return
				}
			}
		}

		fmt.Println("Did not find 14 unique consecutive characters.")
	} else {
		fmt.Println("Error reading line from file.")
	}
}
