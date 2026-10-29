package main

import "fmt"

// minHopCost returns the minimum total toll to reach the last stone with
// jumps of 1-3, never repeating a jump length twice in a row.
func minHopCost(cost []int) int {
	// TODO: implement
	return 0
}

func main() {
	type testCase struct {
		cost     []int
		expected int
	}

	tests := []testCase{
		{[]int{0, 5, 1, 4, 2}, 6},
		{[]int{0, 1, 1, 1, 1, 1, 1}, 3},
		{[]int{0, 9, 1, 1, 9, 1}, 2},
		{[]int{7}, 0},                             // extra: already on the last stone
		{[]int{3, 8}, 8},                          // extra: single forced jump (start toll ignored)
		{[]int{0, 2, 100, 3}, 3},                  // extra: direct jump of 3
		{[]int{0, 4, 4, 4, 4, 4, 4, 4, 4}, 12},    // extra: uniform tolls
	}

	for _, tc := range tests {
		got := minHopCost(tc.cost)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s cost=%v expected=%d got=%d\n", status, tc.cost, tc.expected, got)
	}
}
