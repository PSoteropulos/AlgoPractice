package main

import (
	"fmt"
	"reflect"
)

func daysUntilHigher(levels []int) []int {
	// TODO: implement
	return nil
}

func main() {
	tests := []struct {
		name     string
		levels   []int
		expected []int
	}{
		{"example 1", []int{3, 1, 4, 1, 5}, []int{2, 1, 2, 1, 0}},
		{"example 2", []int{5, 5, 5}, []int{0, 0, 0}},
		{"example 3", []int{9, 7, 5, 6}, []int{0, 0, 1, 0}},
		{"edge: single day", []int{1}, []int{0}},
		{"edge: strictly increasing", []int{1, 2, 3, 4}, []int{1, 1, 1, 0}},
		{"edge: strictly decreasing", []int{4, 3, 2, 1}, []int{0, 0, 0, 0}},
		{"edge: zero then big", []int{0, 0, 1000000000, 0, 1000000000}, []int{2, 1, 0, 1, 0}},
	}

	for _, t := range tests {
		actual := daysUntilHigher(append([]int(nil), t.levels...))
		status := "FAIL"
		if reflect.DeepEqual(actual, t.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, t.name, t.expected, actual)
	}
}
