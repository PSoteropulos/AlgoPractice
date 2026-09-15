package main

import "fmt"

func minMaxLoad(hourly []int, shifts int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	name     string
	hourly   []int
	shifts   int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", []int{10, 20, 30, 40}, 2, 60},
		{"example 2", []int{5, 5, 5, 5, 5, 5}, 3, 10},
		{"example 3", []int{3, 1, 4}, 1, 8},
		{"edge: shifts equals length", []int{7, 2, 9}, 3, 9},
		{"edge: single hour", []int{42}, 1, 42},
	}

	for _, tc := range tests {
		got := minMaxLoad(tc.hourly, tc.shifts)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
