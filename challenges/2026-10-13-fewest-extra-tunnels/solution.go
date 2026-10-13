package main

import "fmt"

// minExtraTunnels returns the minimum number of new tunnels so that no tunnel
// is fragile.
func minExtraTunnels(n int, tunnels [][]int) int {
	// TODO: implement
	return 0
}

func main() {
	type testCase struct {
		n        int
		tunnels  [][]int
		expected int
	}

	tests := []testCase{
		{5, [][]int{{0, 1}, {0, 2}, {0, 3}, {0, 4}}, 2},
		{6, [][]int{{0, 1}, {1, 2}, {2, 0}, {2, 3}, {3, 4}, {3, 5}}, 2},
		{4, [][]int{{0, 1}, {1, 2}, {2, 3}, {3, 0}}, 0},
		{1, [][]int{}, 0}, // extra: single chamber
		{3, [][]int{{0, 1}, {0, 1}, {1, 2}}, 1}, // extra: parallel tunnels, one fragile
		{6, [][]int{{0, 1}, {1, 2}, {2, 0}, {2, 3}, {3, 4}, {4, 5}, {5, 3}}, 1}, // extra: two loops joined by a bridge
		{6, [][]int{{0, 1}, {1, 2}, {2, 3}, {3, 4}, {4, 5}}, 1}, // extra: path of six
	}

	for _, tc := range tests {
		got := minExtraTunnels(tc.n, tc.tunnels)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s n=%d tunnels=%v expected=%d got=%d\n", status, tc.n, tc.tunnels, tc.expected, got)
	}
}
