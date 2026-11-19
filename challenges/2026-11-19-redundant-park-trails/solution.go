package main

import (
	"fmt"
	"reflect"
)

// redundantTrails returns the indices (increasing) of trails that were
// redundant at the moment they were built (see problem.md).
func redundantTrails(n int, trails [][]int) []int {
	// TODO: implement
	return []int{-1}
}

func main() {
	type testCase struct {
		name     string
		n        int
		trails   [][]int
		expected []int
	}

	bigN := 100000
	bigTrails := make([][]int, 0, bigN)
	for i := 0; i < bigN-1; i++ {
		bigTrails = append(bigTrails, []int{i, i + 1})
	}
	bigTrails = append(bigTrails, []int{bigN - 1, 0})

	tests := []testCase{
		{"example 1", 4, [][]int{{0, 1}, {1, 2}, {0, 2}, {3, 3}, {2, 3}}, []int{2, 3}},
		{"example 2", 3, [][]int{{0, 1}, {1, 0}, {0, 1}}, []int{1, 2}},
		{"example 3", 6, [][]int{{0, 1}, {2, 3}, {4, 5}, {1, 2}, {3, 4}}, []int{}},
		{"extra: no trails", 5, [][]int{}, []int{}},
		{"extra: single clearing, only loops", 1, [][]int{{0, 0}, {0, 0}}, []int{0, 1}},
		{"extra: cycle closed by last trail", 5, [][]int{{0, 1}, {2, 3}, {3, 4}, {1, 2}, {4, 0}}, []int{4}},
		{"extra: long path then closing trail", bigN, bigTrails, []int{bigN - 1}},
	}

	for _, tc := range tests {
		got := redundantTrails(tc.n, tc.trails)
		if got == nil {
			got = []int{}
		}
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%v got=%v\n", status, tc.name, tc.expected, got)
	}
}
