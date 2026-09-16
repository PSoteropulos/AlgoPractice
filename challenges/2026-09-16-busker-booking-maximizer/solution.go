package main

import "fmt"

func maxTotalDonations(slots [][]int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	slots    [][]int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", [][]int{{0, 3, 5}, {2, 5, 6}, {4, 7, 5}, {6, 9, 4}}, 10},
		{"example 2", [][]int{{1, 4, 3}}, 3},
		{"example 3", [][]int{{0, 2, 5}, {0, 2, 10}, {1, 3, 3}}, 10},
		{"edge: back-to-back slots both taken", [][]int{{0, 2, 3}, {2, 4, 4}}, 7},
		{"edge: single slot", [][]int{{5, 10, 100}}, 100},
	}

	for _, tc := range tests {
		got := maxTotalDonations(tc.slots)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
