package main

import (
	"fmt"
	"reflect"
)

func mixerFriendCircles(n int, introductions [][]int) []int {
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
		{"example 1", 5, [][]int{{0, 1}, {1, 2}, {3, 4}}, []int{3, 0}},
		{"example 2", 6, [][]int{{0, 1}, {2, 3}}, []int{2, 2}},
		{"example 3", 1, [][]int{}, []int{1, 1}},
		{"edge: duplicate introductions", 3, [][]int{{0, 1}, {1, 0}, {0, 1}}, []int{2, 1}},
		{"edge: full chain merges everyone", 4, [][]int{{0, 1}, {1, 2}, {2, 3}}, []int{4, 0}},
	}

	for _, tc := range tests {
		got := mixerFriendCircles(tc.n, tc.input)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
