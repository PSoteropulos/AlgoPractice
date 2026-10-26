package main

import (
	"fmt"
	"reflect"
)

func maxClusterAfterShutdowns(weights []int, edges [][]int, order []int) []int64 {
	// TODO: implement
	return nil
}

type testCase struct {
	weights  []int
	edges    [][]int
	order    []int
	expected []int64
}

func main() {
	tests := []testCase{
		{[]int{4, 1, 3, 2}, [][]int{{0, 1}, {1, 2}, {2, 3}}, []int{1, 2, 0, 3}, []int64{5, 4, 2, 0}},
		{[]int{5, 5, 5}, [][]int{{0, 1}, {1, 2}, {0, 2}}, []int{0, 1, 2}, []int64{10, 5, 0}},
		{[]int{2, 7, 1, 3, 6}, [][]int{{0, 1}, {1, 2}, {3, 4}}, []int{4, 0, 2, 1, 3}, []int64{10, 8, 7, 3, 0}},
		{[]int{7}, [][]int{}, []int{0}, []int64{0}},                                                                                                                 // extra: single tower, no edges
		{[]int{1, 1, 1, 1}, [][]int{{0, 1}, {0, 2}, {0, 3}}, []int{0, 1, 2, 3}, []int64{1, 1, 1, 0}},                                                                // extra: removing the hub shatters a star
		{[]int{1000000000, 1000000000, 1000000000, 1000000000}, [][]int{{0, 1}, {1, 2}, {2, 3}}, []int{3, 2, 1, 0}, []int64{3000000000, 2000000000, 1000000000, 0}}, // extra: sums exceed 32-bit range
	}

	for _, tc := range tests {
		got := maxClusterAfterShutdowns(tc.weights, tc.edges, tc.order)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s weights=%v edges=%v order=%v expected=%v got=%v\n", status, tc.weights, tc.edges, tc.order, tc.expected, got)
	}
}
