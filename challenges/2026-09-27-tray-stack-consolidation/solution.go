package main

import "fmt"

func minConsolidationEffort(heights []int) int64 {
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
		{"example 1", []int{4, 3, 2, 6}, 29},
		{"example 2", []int{1, 8, 3, 5}, 30},
		{"example 3", []int{7}, 0},
		{"edge: no stacks at all", []int{}, 0},
		{"edge: exactly two stacks", []int{2, 9}, 11},
	}

	for _, tc := range tests {
		got := minConsolidationEffort(tc.heights)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
