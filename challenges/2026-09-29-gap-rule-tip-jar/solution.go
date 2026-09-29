package main

import "fmt"

func maxTotalTips(tips []int, d int) int64 {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	tips     []int
	d        int
	expected int64
}

func main() {
	tests := []testCase{
		{"example 1", []int{4, 1, 7, 3, 6}, 2, 17},
		{"example 2", []int{5, 10, 5, 10}, 3, 15},
		{"example 3", []int{-3, -1, -2}, 2, 0},
		{"edge: d = 1 takes all positives", []int{2, -1, 3}, 1, 5},
		{"edge: d larger than n", []int{9, 8, 7}, 5, 9},
		{"edge: single negative", []int{-5}, 1, 0},
	}

	for _, tc := range tests {
		got := maxTotalTips(tc.tips, tc.d)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
