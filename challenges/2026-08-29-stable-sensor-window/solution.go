package main

import (
	"fmt"
)

func longestStableWindow(readings []int, tolerance int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	readings  []int
	tolerance int
	expected  int
}

func main() {
	tests := []testCase{
		{[]int{4, 8, 5, 1, 7, 9}, 4, 3},
		{[]int{5, 2, 2, 3, 9, 1}, 3, 4},
		{[]int{3, 3, 3, 3, 3, 3}, 0, 6},
		{[]int{}, 3, 0},         // extra: empty readings
		{[]int{10}, 5, 1},       // extra: single reading
	}

	for _, tc := range tests {
		got := longestStableWindow(tc.readings, tc.tolerance)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s readings=%v tolerance=%d expected=%d got=%d\n", status, tc.readings, tc.tolerance, tc.expected, got)
	}
}
