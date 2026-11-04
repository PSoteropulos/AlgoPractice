package main

import (
	"fmt"
	"reflect"
)

// reachableByTruck returns, for each [src, dst, load] query, whether src can
// reach dst using only bridges with cap >= load.
func reachableByTruck(n int, bridges [][]int, queries [][]int) []bool {
	// TODO: implement
	return make([]bool, len(queries))
}

func main() {
	chain := make([][]int, 99999)
	for i := range chain {
		chain[i] = []int{i, i + 1, 5}
	}

	type testCase struct {
		name     string
		n        int
		bridges  [][]int
		queries  [][]int
		expected []bool
	}

	tests := []testCase{
		{"example 1", 5, [][]int{{0, 1, 8}, {1, 2, 5}, {2, 3, 9}, {3, 4, 2}},
			[][]int{{0, 2, 5}, {0, 2, 6}, {2, 4, 2}, {2, 4, 3}, {3, 3, 100}},
			[]bool{true, false, true, false, true}},
		{"example 2", 4, [][]int{{0, 1, 3}, {0, 1, 7}, {2, 3, 4}},
			[][]int{{0, 1, 7}, {0, 1, 8}, {1, 2, 1}}, []bool{true, false, false}},
		{"example 3", 3, [][]int{}, [][]int{{0, 2, 1}, {1, 1, 1}}, []bool{false, true}},
		{"extra: single town", 1, [][]int{}, [][]int{{0, 0, 1}}, []bool{true}},
		{"extra: large chain", 100000, chain,
			[][]int{{0, 99999, 5}, {0, 99999, 6}, {50000, 50001, 1}}, []bool{true, false, true}},
	}

	for _, tc := range tests {
		got := reachableByTruck(tc.n, tc.bridges, tc.queries)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%v got=%v\n", status, tc.name, tc.expected, got)
	}
}
