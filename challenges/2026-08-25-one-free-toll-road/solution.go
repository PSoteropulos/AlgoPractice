package main

import "fmt"

func oneFreeTollRoad(n int, roads [][]int, src int, dst int) int {
	// TODO: implement
	return -1
}

type testCase struct {
	n        int
	roads    [][]int
	src      int
	dst      int
	expected int
}

func main() {
	roads1 := [][]int{{0, 1, 3}, {1, 2, 3}, {2, 3, 3}, {0, 2, 8}}
	roads3 := [][]int{{0, 1, 2}, {2, 3, 4}}

	tests := []testCase{
		{4, roads1, 0, 3, 3},
		{4, roads1, 0, 2, 0},
		{5, roads3, 0, 4, -1},
		{4, roads1, 2, 2, 0},          // extra: src == dst
		{1, [][]int{}, 0, 0, 0}, // extra: single city, no roads
	}

	for _, tc := range tests {
		got := oneFreeTollRoad(tc.n, tc.roads, tc.src, tc.dst)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s n=%d roads=%v src=%d dst=%d expected=%d got=%d\n", status, tc.n, tc.roads, tc.src, tc.dst, tc.expected, got)
	}
}
