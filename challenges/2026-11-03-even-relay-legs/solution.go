package main

import "fmt"

// minLongestLeg returns the smallest possible length of the longest leg when
// distances is split into exactly k non-empty consecutive legs.
func minLongestLeg(distances []int, k int) int {
	// TODO: implement
	return 0
}

func main() {
	type testCase struct {
		distances []int
		k         int
		expected  int
	}

	large := make([]int, 100000)
	for i := range large {
		large[i] = 10000
	}

	tests := []testCase{
		{[]int{4, 9, 3, 6, 2, 8}, 3, 13},
		{[]int{5, 5, 5, 5}, 2, 10},
		{[]int{12, 1, 1}, 3, 12},
		{[]int{7}, 1, 7}, // extra: single checkpoint gap
		{[]int{0, 0, 0}, 2, 0}, // extra: all zero gaps
		{[]int{1, 2, 3, 4, 5}, 1, 15}, // extra: one runner takes everything
		{[]int{3, 1, 4, 1, 5, 9, 2, 6}, 8, 9}, // extra: one gap per runner
		{large, 50000, 20000}, // extra: large input
	}

	for _, tc := range tests {
		got := minLongestLeg(tc.distances, tc.k)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s n=%d k=%d expected=%d got=%d\n", status, len(tc.distances), tc.k, tc.expected, got)
	}
}
