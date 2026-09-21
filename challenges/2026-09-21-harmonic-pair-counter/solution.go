package main

import "fmt"

func countHarmonicPairs(freq []int, k int) int64 {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	freq     []int
	k        int
	expected int64
}

func main() {
	tests := []testCase{
		{"example 1", []int{4, 6, 8, 10, 3}, 2, 5},
		{"example 2", []int{2, 4, 8, 16}, 4, 2},
		{"example 3", []int{5, 7, 11}, 5, 0},
		{"edge: k larger than every value", []int{2, 4, 6}, 100, 0},
		{"edge: all elements equal to k", []int{7, 7, 7}, 7, 3},
	}

	for _, tc := range tests {
		got := countHarmonicPairs(tc.freq, tc.k)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
