package main

import (
	"fmt"
	"reflect"
)

func conveyorBeltLog(events []int) []int {
	// TODO: implement
	return nil
}

func main() {
	tests := []struct {
		name     string
		events   []int
		expected []int
	}{
		{"example 1", []int{5, 3, 0, 4, -1, 7}, []int{4, 7}},
		{"example 2", []int{2, 6, 1, -5, 9, 0, 0}, []int{}},
		{"example 3", []int{3, 8, 2, -1, 0, -2, 6}, []int{6}},
		{"edge: removals on empty belt", []int{0, 0, -3}, []int{}},
		{"edge: single placement", []int{4}, []int{4}},
		{"edge: front then back removal interplay", []int{1, 2, 3, -2, 0, 5, -1, 0, 9}, []int{9}},
	}

	for _, t := range tests {
		actual := conveyorBeltLog(t.events)
		status := "FAIL"
		if reflect.DeepEqual(actual, t.expected) || (len(actual) == 0 && len(t.expected) == 0) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, t.name, t.expected, actual)
	}
}
