package main

import "fmt"

func minStorageBins(batchCodes []int) int {
	// TODO: implement
	return -1
}

type testCase struct {
	name       string
	batchCodes []int
	expected   int
}

func main() {
	tests := []testCase{
		{"example 1", []int{6, 10, 15}, 3},
		{"example 2", []int{4, 9, 25, 6}, 2},
		{"example 3", []int{2, 4, 8, 16}, 4},
		{"edge: single sample", []int{7}, 1},
		{"edge: chain conflict needs two bins", []int{2, 3, 4}, 2},
	}

	for _, tc := range tests {
		got := minStorageBins(tc.batchCodes)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
