package main

import "fmt"

func maxOrdersCompleted(orders [][]int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	orders   [][]int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", [][]int{{5, 9}, {2, 6}, {3, 9}, {4, 15}, {6, 15}}, 4},
		{"example 2", [][]int{{3, 3}, {2, 3}}, 1},
		{"example 3", [][]int{{5, 3}}, 0},
		{"edge: no orders at all", [][]int{}, 0},
		{"edge: everything comfortably fits", [][]int{{1, 10}, {2, 10}, {3, 10}}, 3},
	}

	for _, tc := range tests {
		got := maxOrdersCompleted(tc.orders)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
