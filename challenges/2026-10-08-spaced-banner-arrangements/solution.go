package main

import "fmt"

func countArrangements(tiles string) int64 {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		tiles    string
		expected int64
	}{
		{"example 1", "AAB", 1},
		{"example 2", "AABBC", 12},
		{"example 3", "AAA", 0},
		{"edge: single tile", "A", 1},
		{"edge: all distinct", "ABCDEFGHI", 362880},
		{"edge: two colors balanced", "AAAABBBB", 2},
		{"edge: mixed multiplicities", "AABBCCDDE", 8760},
	}

	for _, t := range tests {
		actual := countArrangements(t.tiles)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
