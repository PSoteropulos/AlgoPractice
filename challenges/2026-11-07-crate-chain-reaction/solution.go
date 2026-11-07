package main

import (
	"fmt"
	"reflect"
)

// crateChainReaction returns the labels left after repeatedly removing k
// adjacent equal crates.
func crateChainReaction(crates []int, k int) []int {
	// TODO: implement
	return []int{-1}
}

func main() {
	big := make([]int, 100000)
	for i := range big {
		big[i] = 1
	}

	type testCase struct {
		name     string
		c        []int
		k        int
		expected []int
	}

	tests := []testCase{
		{"example 1", []int{2, 2, 3, 3, 3, 2}, 3, []int{}},
		{"example 2", []int{1, 1, 2, 2, 1}, 2, []int{1}},
		{"example 3", []int{5, 5, 5, 5, 5}, 3, []int{5, 5}},
		{"extra: single crate", []int{7}, 2, []int{7}},
		{"extra: nested cancel", []int{1, 2, 3, 3, 2, 1}, 2, []int{}},
		{"extra: gap rejoins", []int{1, 2, 2, 1, 1, 2}, 2, []int{1, 2}},
		{"extra: large uniform", big, 3, []int{1}},
	}

	for _, tc := range tests {
		c := append([]int{}, tc.c...)
		got := crateChainReaction(c, tc.k)
		if got == nil {
			got = []int{}
		}
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		if len(got) < 20 {
			fmt.Printf("%s %s: expected=%v got=%v\n", status, tc.name, tc.expected, got)
		} else {
			fmt.Printf("%s %s: expected=%v got=...\n", status, tc.name, tc.expected)
		}
	}
}
