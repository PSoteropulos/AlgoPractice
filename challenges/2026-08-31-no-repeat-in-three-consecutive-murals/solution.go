package main

import "fmt"

func minMuralCost(n int, k int, cost [][]int) int {
	// TODO: implement
	return -1
}

type testCase struct {
	name     string
	n        int
	k        int
	cost     [][]int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", 3, 3, [][]int{{1, 2, 3}, {3, 2, 1}, {2, 1, 3}}, 3},
		{"example 2", 4, 3, [][]int{{1, 5, 3}, {2, 9, 4}, {5, 1, 2}, {3, 6, 4}}, 9},
		{"example 3", 1, 3, [][]int{{5, 2, 9}}, 2},
		{"edge: n=2, k=3", 2, 3, [][]int{{4, 1, 9}, {2, 3, 8}}, 3},
		{"edge: all-equal costs force any valid pattern to same total", 5, 3,
			[][]int{{2, 2, 2}, {2, 2, 2}, {2, 2, 2}, {2, 2, 2}, {2, 2, 2}}, 10},
	}

	for _, tc := range tests {
		got := minMuralCost(tc.n, tc.k, tc.cost)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
