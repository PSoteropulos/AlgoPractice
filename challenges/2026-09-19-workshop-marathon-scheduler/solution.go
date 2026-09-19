package main

import (
	"fmt"
)

func maxWorkshops(workshops [][]int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	input    [][]int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", [][]int{{2, 5}, {3, 5}, {4, 7}, {5, 10}}, 3},
		{"example 2", [][]int{{4, 6}, {5, 5}, {2, 6}}, 2},
		{"example 3", [][]int{{10, 3}}, 0},
		{"edge: tie deadlines both fit", [][]int{{2, 4}, {1, 4}}, 2},
		{"edge: tie deadlines only one fits", [][]int{{3, 4}, {2, 4}}, 1},
	}

	for _, tc := range tests {
		got := maxWorkshops(tc.input)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
