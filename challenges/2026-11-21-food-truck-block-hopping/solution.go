package main

import "fmt"

// maxRouteEarnings returns the maximum total profit over all days, where each
// night's drive costs moveCost per block (see problem.md).
func maxRouteEarnings(earnings [][]int, moveCost int) int64 {
	// TODO: implement
	return -2
}

func main() {
	type testCase struct {
		name     string
		earnings [][]int
		moveCost int
		expected int64
	}

	wideM := 50000
	wide := [][]int{make([]int, wideM), make([]int, wideM)}
	wide[0][0] = 100000
	wide[1][wideM-1] = 100000

	tall := make([][]int, 100000)
	for i := range tall {
		tall[i] = []int{100000}
	}

	tests := []testCase{
		{"example 1", [][]int{{3, 1, 4}, {1, 5, 1}, {2, 1, 6}}, 1, 13},
		{"example 2", [][]int{{10, 0, 0, 0, 9}, {0, 0, 0, 0, 9}, {10, 0, 0, 0, 0}}, 3, 20},
		{"example 3", [][]int{{-5}, {-2}, {7}}, 4, 0},
		{"extra: free driving takes each day's max", [][]int{{2, 9, 1, 0}, {8, 0, 0, 3}}, 0, 17},
		{"extra: single all-negative day", [][]int{{-3, -1, -7}}, 5, -1},
		{"extra: wide street, long drive pays off", wide, 1, 150001},
		{"extra: totals exceed 32-bit", tall, 7, 10000000000},
	}

	for _, tc := range tests {
		got := maxRouteEarnings(tc.earnings, tc.moveCost)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
