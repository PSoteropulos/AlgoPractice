package main

import "fmt"

func longestSteadyWindow(occupancy []int, tolerance int, minPeak int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name      string
	occupancy []int
	tolerance int
	minPeak   int
	expected  int
}

func main() {
	tests := []testCase{
		{"example 1", []int{4, 6, 5, 7, 9, 8, 3}, 3, 8, 3},
		{"example 2", []int{2, 2, 2, 2}, 0, 5, 0},
		{"example 3", []int{10, 10, 10, 10, 10}, 0, 10, 5},
		{"edge: single element meets peak", []int{5}, 0, 5, 1},
		{"edge: single element below peak", []int{5}, 0, 6, 0},
	}

	for _, tc := range tests {
		got := longestSteadyWindow(tc.occupancy, tc.tolerance, tc.minPeak)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
