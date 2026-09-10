package main

import "fmt"

func broadcastReach(n int, edges [][]int, start int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	n        int
	edges    [][]int
	start    int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", 6, [][]int{{0, 1}, {0, 2}, {1, 3}, {2, 3}, {3, 4}}, 0, 5},
		{"example 2", 4, [][]int{{1, 2}, {2, 3}}, 0, 1},
		{"example 3", 3, [][]int{{0, 1}, {1, 2}, {2, 0}}, 1, 3},
		{"edge: no edges at all", 1, [][]int{}, 0, 1},
		{"edge: duplicate edges", 3, [][]int{{0, 1}, {0, 1}, {1, 2}}, 0, 3},
	}

	for _, tc := range tests {
		got := broadcastReach(tc.n, tc.edges, tc.start)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
