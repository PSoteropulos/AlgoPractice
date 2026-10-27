package main

import (
	"fmt"
	"reflect"
)

func countSpecialBadges(queries [][]int64) []int {
	// TODO: implement
	return nil
}

type testCase struct {
	name     string
	queries  [][]int64
	expected []int
}

func main() {
	tests := []testCase{
		{"example 1", [][]int64{{1, 10}, {10, 50}, {1, 1}}, []int{2, 2, 0}},
		{"example 2", [][]int64{{4, 4}, {5, 8}, {1, 100}}, []int{1, 0, 4}},
		{"example 3", [][]int64{{1, 1000000000000}}, []int{78498}},
		{"edge: no squares of primes in range", [][]int64{{2, 3}, {24, 26}}, []int{0, 1}},
		{"edge: square of largest prime below 10^6", [][]int64{{999966000289, 999966000289}}, []int{1}},
		{"edge: square of composite only", [][]int64{{36, 36}, {16, 16}}, []int{0, 0}},
	}

	for _, tc := range tests {
		got := countSpecialBadges(tc.queries)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
