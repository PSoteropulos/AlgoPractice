package main

import "fmt"

// strongestMedian returns the greatest median of any contiguous streak of
// nums with length at least k. For an even length, the median is the smaller
// of the two middle elements (see problem.md).
func strongestMedian(nums []int, k int) int {
	// TODO: implement
	return 0
}

func main() {
	type testCase struct {
		name     string
		nums     []int
		k        int
		expected int
	}

	const n = 100000
	increasing := make([]int, n)
	alternating := make([]int, n)
	for i := 0; i < n; i++ {
		increasing[i] = i + 1
		if i%2 == 0 {
			alternating[i] = 1000000000
		} else {
			alternating[i] = 1
		}
	}

	tests := []testCase{
		{"example 1", []int{1, 2, 3, 2, 1}, 3, 2},
		{"example 2", []int{5, 1, 8, 7, 2, 9}, 2, 7},
		{"example 3", []int{3, 9, 1, 9, 1, 9, 2}, 4, 9},
		{"extra: single hour", []int{7}, 1, 7},
		{"extra: even length takes the smaller middle", []int{4, 8}, 2, 4},
		{"extra: odd-length streak beats every pair", []int{6, 2, 6, 2, 6, 2}, 2, 6},
		{"extra: 100000 increasing, k = 50000", increasing, 50000, 75000},
		{"extra: 100000 alternating, whole array", alternating, n, 1},
		{"extra: 100000 alternating, k = n - 1", alternating, n - 1, 1000000000},
	}

	for _, tc := range tests {
		got := strongestMedian(append([]int(nil), tc.nums...), tc.k)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
