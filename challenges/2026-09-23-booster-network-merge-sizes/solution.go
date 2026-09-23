package main

import (
	"fmt"
	"reflect"
)

func boosterNetworkMergeSizes(n int, cables [][]int) []int {
	// TODO: implement
	return []int{}
}

type testCase struct {
	name     string
	n        int
	input    [][]int
	expected []int
}

func main() {
	tests := []testCase{
		{"example 1", 5, [][]int{{0, 1}, {1, 2}, {3, 4}, {2, 3}}, []int{2, 3, 2, 5}},
		{"example 2", 3, [][]int{{0, 1}, {0, 1}}, []int{2, 2}},
		{"example 3", 4, [][]int{{0, 1}, {2, 3}, {1, 3}}, []int{2, 2, 4}},
		{"edge: no cables", 3, [][]int{}, []int{}},
		{"edge: single booster network never grows", 1, [][]int{}, []int{}},
		{"edge: long chain", 4, [][]int{{0, 1}, {1, 2}, {2, 3}}, []int{2, 3, 4}},
	}

	for _, tc := range tests {
		got := boosterNetworkMergeSizes(tc.n, tc.input)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
