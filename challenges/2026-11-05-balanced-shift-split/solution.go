package main

import "fmt"

// minSplitCost splits weights into exactly k non-empty contiguous blocks and
// returns the minimum possible sum of (block sum)^2.
func minSplitCost(weights []int, k int) int64 {
	// TODO: implement
	return -1
}

func main() {
	big := make([]int, 20000)
	for i := range big {
		big[i] = 1
	}

	type testCase struct {
		name     string
		w        []int
		k        int
		expected int64
	}

	tests := []testCase{
		{"example 1", []int{1, 2, 3, 4}, 2, 52},
		{"example 2", []int{3, 1, 4, 1, 5}, 3, 66},
		{"example 3", []int{0, 0, 5}, 3, 25},
		{"extra: single crate", []int{7}, 1, 49},
		{"extra: k = n", []int{1, 2, 3, 4}, 4, 30},
		{"extra: k = 1", []int{1, 2, 3, 4}, 1, 100},
		{"extra: large uniform", big, 100, 4000000},
	}

	for _, tc := range tests {
		got := minSplitCost(tc.w, tc.k)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
