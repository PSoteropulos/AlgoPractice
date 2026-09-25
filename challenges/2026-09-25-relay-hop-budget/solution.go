package main

import "fmt"

func minRelayCost(n int, edges [][]int, src int, dst int, maxHops int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	n        int
	edges    [][]int
	src      int
	dst      int
	maxHops  int
	expected int
}

func main() {
	edges := [][]int{{0, 1, 100}, {1, 2, 100}, {0, 2, 500}, {2, 3, 100}, {1, 3, 300}}

	tests := []testCase{
		{"example 1", 4, edges, 0, 3, 2, 400},
		{"example 2", 4, edges, 0, 3, 1, -1},
		{"example 3", 4, edges, 0, 3, 3, 300},
		{"edge: zero hop budget", 4, edges, 0, 3, 0, -1},
		{"edge: unreachable dst", 4, [][]int{{0, 1, 5}}, 0, 3, 3, -1},
		{"edge: cheaper duplicate direct link wins", 2, [][]int{{0, 1, 7}, {0, 1, 3}}, 0, 1, 1, 3},
	}

	for _, tc := range tests {
		got := minRelayCost(tc.n, tc.edges, tc.src, tc.dst, tc.maxHops)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
