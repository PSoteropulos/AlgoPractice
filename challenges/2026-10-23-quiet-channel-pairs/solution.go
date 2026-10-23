package main

import "fmt"

func countQuietPairs(masks []int) int {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		masks    []int
		expected int
	}{
		{"example 1", []int{1, 2, 3}, 1},
		{"example 2", []int{6, 9, 5, 10}, 2},
		{"example 3", []int{0, 0, 5}, 3},
		{"edge: single transmitter", []int{7}, 0},
		{"edge: identical masks overlap", []int{4, 4, 4}, 0},
		{"edge: max mask with zero", []int{1048575, 0}, 1},
		{"edge: all distinct single channels", []int{1, 2, 4, 8, 16}, 10},
	}

	for _, t := range tests {
		actual := countQuietPairs(append([]int(nil), t.masks...))
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
