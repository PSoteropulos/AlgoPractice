package main

import "fmt"

// countCalmStretches returns the number of contiguous non-empty subarrays of
// readings whose (max - min) <= tolerance.
func countCalmStretches(readings []int, tolerance int) int64 {
	// TODO: implement
	return -1
}

func main() {
	big := make([]int, 100000)
	for i := range big {
		big[i] = 1
	}

	type testCase struct {
		name     string
		r        []int
		t        int
		expected int64
	}

	tests := []testCase{
		{"example 1", []int{1, 3, 2, 5}, 1, 5},
		{"example 2", []int{4, 4, 4}, 0, 6},
		{"example 3", []int{2, 5, 3, 4, 8}, 2, 8},
		{"extra: single reading", []int{10}, 0, 1},
		{"extra: huge tolerance", []int{1, 1000000000, 5}, 1000000000, 6},
		{"extra: increasing", []int{1, 2, 3, 4, 5}, 1, 9},
		{"extra: large uniform", big, 0, 5000050000},
	}

	for _, tc := range tests {
		got := countCalmStretches(tc.r, tc.t)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
