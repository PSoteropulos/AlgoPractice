package main

import "fmt"

func countDimWindows(nums []int) int64 {
	// TODO: implement
	return -1
}

func main() {
	tests := []struct {
		name     string
		nums     []int
		expected int64
	}{
		{"example 1", []int{1, 2, 3}, 4},
		{"example 2", []int{5, 5, 5}, 2},
		{"example 3", []int{0, 0}, 3},
		{"edge: single power of two", []int{4}, 1},
		{"edge: single value with three bits", []int{7}, 0},
		{"edge: two readings", []int{1, 3}, 2},
		{"edge: 200000 zeros need 64-bit count", make([]int, 200000), 20000100000},
	}

	for _, tc := range tests {
		nums := append([]int(nil), tc.nums...)
		actual := countDimWindows(nums)
		status := "FAIL"
		if actual == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, actual)
	}
}
