package main

import "fmt"

func longestBalancedStaffingWindow(changes []int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	input    []int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", []int{3, -3, 4, -2, 2, -4}, 6},
		{"example 2", []int{1, -1, 1, -1, 5}, 4},
		{"example 3", []int{2, 3, -1}, 0},
		{"edge: single zero", []int{0}, 1},
		{"edge: no balance possible", []int{1, 2, 3}, 0},
	}

	for _, tc := range tests {
		got := longestBalancedStaffingWindow(tc.input)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
