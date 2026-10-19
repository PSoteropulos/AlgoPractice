package main

import "fmt"

func countBalancedSegments(deltas []int, k int) int64 {
	// TODO: implement
	return -1
}

func main() {
	tests := []struct {
		name     string
		deltas   []int
		k        int
		expected int64
	}{
		{"example 1", []int{4, 5, 0, -2, -3, 1}, 5, 5},
		{"example 2", []int{2, 2, 2}, 2, 3},
		{"example 3", []int{-7, 3, 4, -5, 5}, 5, 4},
		{"edge: all zeros", []int{0, 0, 0, 0}, 3, 6},
		{"edge: k is one", []int{-1, 1, 9, 4, -6}, 1, 10},
		{"edge: no valid segment", []int{1, 2, 4}, 7, 1},
		{"edge: large values", []int{1000000000, 1000000000, 1000000000}, 1000000000, 3},
		{"edge: single hour", []int{3}, 7, 0},
	}

	for _, t := range tests {
		actual := countBalancedSegments(append([]int(nil), t.deltas...), t.k)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
