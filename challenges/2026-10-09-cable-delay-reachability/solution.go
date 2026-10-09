package main

import (
	"fmt"
	"reflect"
)

func canReachAll(n int, cables [][]int, queries [][]int) []bool {
	// TODO: implement
	return nil
}

func main() {
	tests := []struct {
		name     string
		n        int
		cables   [][]int
		queries  [][]int
		expected []bool
	}{
		{"example 1", 5, [][]int{{0, 1, 4}, {1, 2, 6}, {2, 3, 2}, {3, 4, 9}}, [][]int{{0, 2, 7}, {0, 2, 6}, {0, 4, 10}, {2, 3, 3}, {3, 3, 1}}, []bool{true, false, true, true, true}},
		{"example 2", 4, [][]int{{0, 1, 5}, {0, 1, 1}, {2, 3, 3}}, [][]int{{0, 1, 1}, {0, 1, 2}, {1, 2, 100}, {2, 3, 4}}, []bool{false, true, false, true}},
		{"example 3", 3, [][]int{}, [][]int{{1, 1, 1}, {0, 2, 1000000000}}, []bool{true, false}},
		{"edge: single depot", 1, [][]int{}, [][]int{{0, 0, 1}}, []bool{true}},
		{"edge: strict boundary, unsorted queries", 4, [][]int{{0, 1, 3}, {1, 2, 3}, {2, 3, 8}}, [][]int{{0, 3, 9}, {0, 2, 4}, {0, 2, 3}, {0, 3, 8}}, []bool{true, true, false, false}},
		{"edge: self-loop cable", 2, [][]int{{0, 0, 1}, {0, 1, 5}}, [][]int{{0, 1, 5}, {0, 1, 6}}, []bool{false, true}},
	}

	for _, t := range tests {
		actual := canReachAll(t.n, t.cables, t.queries)
		status := "FAIL"
		if reflect.DeepEqual(actual, t.expected) || (len(actual) == 0 && len(t.expected) == 0) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, t.name, t.expected, actual)
	}
}
