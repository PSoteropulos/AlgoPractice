package main

import (
	"fmt"
	"reflect"
)

func flavorEquivalentBatches(batches [][]int) []int {
	// TODO: implement
	return []int{}
}

type testCase struct {
	name     string
	input    [][]int
	expected []int
}

func main() {
	tests := []testCase{
		{"example 1", [][]int{{1, 2, 3}, {3, 2, 1}, {4, 5}}, []int{2, 2}},
		{"example 2", [][]int{{1, 1, 2}, {1, 2, 1}, {2, 1, 1}, {1, 2}}, []int{3, 2}},
		{"example 3", [][]int{{7}}, []int{1, 1}},
		{"edge: all identical", [][]int{{1, 2}, {2, 1}, {1, 2}}, []int{3, 1}},
		{"edge: same values, different multiset", [][]int{{1, 1}, {1}}, []int{1, 2}},
	}

	for _, tc := range tests {
		got := flavorEquivalentBatches(tc.input)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
