package main

import (
	"fmt"
	"reflect"
)

// bestHub returns [hub, minCost]; ties go to the smallest hub index.
func bestHub(n int, edges [][]int, weights []int) []int64 {
	// TODO: implement
	return []int64{-1, -1}
}

func main() {
	bigN := 100000
	bigEdges := make([][]int, 0, bigN-1)
	ones := make([]int, bigN)
	for i := 0; i < bigN; i++ {
		ones[i] = 1
		if i < bigN-1 {
			bigEdges = append(bigEdges, []int{i, i + 1})
		}
	}

	type testCase struct {
		name     string
		n        int
		edges    [][]int
		w        []int
		expected []int64
	}

	tests := []testCase{
		{"example 1", 5, [][]int{{0, 1}, {0, 2}, {2, 3}, {2, 4}}, []int{1, 2, 3, 4, 5}, []int64{2, 14}},
		{"example 2", 4, [][]int{{0, 1}, {1, 2}, {2, 3}}, []int{1, 0, 0, 1}, []int64{0, 3}},
		{"example 3", 6, [][]int{{3, 0}, {3, 1}, {3, 2}, {3, 4}, {3, 5}}, []int{0, 0, 0, 0, 0, 0}, []int64{0, 0}},
		{"extra: single node", 1, [][]int{}, []int{7}, []int64{0, 0}},
		{"extra: heavy leaf", 5, [][]int{{0, 1}, {1, 2}, {2, 3}, {3, 4}}, []int{1, 1, 1, 1, 100}, []int64{4, 10}},
		{"extra: unsorted edges", 7, [][]int{{4, 6}, {2, 0}, {5, 3}, {1, 4}, {3, 1}, {0, 3}}, []int{2, 9, 1, 4, 3, 8, 5}, []int64{1, 40}},
		{"extra: long path", bigN, bigEdges, ones, []int64{49999, 2500000000}},
	}

	for _, tc := range tests {
		got := bestHub(tc.n, tc.edges, tc.w)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%v got=%v\n", status, tc.name, tc.expected, got)
	}
}
