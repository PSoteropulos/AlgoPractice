package main

import "fmt"

// countLanternRows returns the number of viewing rows: segments whose end
// lanterns are equal in height and with nothing taller inside.
func countLanternRows(heights []int) int64 {
	// TODO: implement
	return 0
}

func main() {
	big := make([]int, 100000)
	for i := range big {
		big[i] = 1
	}

	type testCase struct {
		heights  []int
		expected int64
	}

	tests := []testCase{
		{[]int{3, 1, 3}, 4},
		{[]int{1, 4, 3, 3, 2}, 6},
		{[]int{5, 1, 6, 5}, 4},
		{[]int{7}, 1},                 // extra: single lantern
		{[]int{4, 4, 1, 4, 4}, 11},    // extra: repeated maxima around a dip
		{[]int{2, 2, 2}, 6},           // extra: all equal -> n(n+1)/2
		{big, 5000050000},             // extra: needs 64-bit result
	}

	for _, tc := range tests {
		got := countLanternRows(tc.heights)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s n=%d expected=%d got=%d\n", status, len(tc.heights), tc.expected, got)
	}
}
