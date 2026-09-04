package main

import "fmt"

func countSnackCombos(prices []int, budget int) int {
	// TODO: implement
	return -1
}

type testCase struct {
	name     string
	prices   []int
	budget   int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", []int{1, 2, 3, 4, 3}, 6, 3},
		{"example 2", []int{5, 3, 3, 5}, 8, 1},
		{"example 3", []int{10}, 10, 0},
		{"edge: empty prices", []int{}, 5, 0},
		{"edge: all duplicates", []int{2, 2, 2, 2}, 4, 1},
	}

	for _, tc := range tests {
		got := countSnackCombos(tc.prices, tc.budget)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
