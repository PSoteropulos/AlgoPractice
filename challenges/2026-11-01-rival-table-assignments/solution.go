package main

import "fmt"

// countSeatings returns the number of valid two-table seatings modulo 1e9+7.
func countSeatings(n int, rivals [][]int) int {
	// TODO: implement
	return 0
}

func pow2(e int) int {
	r := 1
	for i := 0; i < e; i++ {
		r = r * 2 % 1000000007
	}
	return r
}

func main() {
	chain := make([][]int, 0, 99999)
	for i := 0; i < 99999; i++ {
		chain = append(chain, []int{i, i + 1})
	}

	type testCase struct {
		n        int
		rivals   [][]int
		expected int
	}

	tests := []testCase{
		{4, [][]int{{0, 1}, {1, 2}}, 4},
		{3, [][]int{{0, 1}, {1, 2}, {2, 0}}, 0},
		{5, [][]int{}, 32},
		{1, [][]int{}, 2},                                         // extra: lone guest
		{6, [][]int{{0, 1}, {2, 3}, {4, 5}, {1, 0}}, 8},           // extra: duplicate pair
		{4, [][]int{{0, 1}, {1, 2}, {2, 3}, {3, 0}}, 2},           // extra: even cycle
		{100000, chain, 2},                                        // extra: long path
		{100000, [][]int{}, pow2(100000)},                         // extra: modulo needed
	}

	for _, tc := range tests {
		got := countSeatings(tc.n, tc.rivals)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s n=%d rivals=%d expected=%d got=%d\n", status, tc.n, len(tc.rivals), tc.expected, got)
	}
}
