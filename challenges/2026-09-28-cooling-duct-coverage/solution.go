package main

import "fmt"

func maxDuctArea(heights []int) int64 {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	heights  []int
	expected int64
}

func main() {
	tests := []testCase{
		{"example 1", []int{2, 1, 5, 6, 2, 3}, 10},
		{"example 2", []int{6, 2, 5, 4, 5, 1, 6}, 12},
		{"example 3", []int{3, 3, 3, 3}, 12},
		{"edge: single rack", []int{5}, 5},
		{"edge: strictly increasing", []int{1, 2, 3, 4, 5}, 9},
	}

	for _, tc := range tests {
		got := maxDuctArea(tc.heights)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
