package main

import "fmt"

func findTier(thresholds []int, points int) int {
	// TODO: implement
	return -1
}

type testCase struct {
	thresholds []int
	points     int
	expected   int
}

func main() {
	tests := []testCase{
		{[]int{100, 250, 500, 1000}, 300, 1},
		{[]int{100, 250, 500, 1000}, 50, -1},
		{[]int{100, 250, 500, 1000}, 1000, 3},
		{[]int{100, 250, 500, 1000}, 249, 0}, // extra: just below the next threshold
		{[]int{5}, 5, 0},                     // extra: single-tier array, exact match
	}

	for _, tc := range tests {
		got := findTier(tc.thresholds, tc.points)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s thresholds=%v points=%d expected=%d got=%d\n", status, tc.thresholds, tc.points, tc.expected, got)
	}
}
