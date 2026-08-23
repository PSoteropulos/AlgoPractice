package main

import "fmt"

func cappedTeamMerges(n int, maxSize int, requests [][]int) []int {
	// TODO: implement
	return nil
}

type testCase struct {
	n        int
	maxSize  int
	requests [][]int
	expected []int
}

func slicesEqual(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}

func main() {
	tests := []testCase{
		{5, 3, [][]int{{0, 1}, {2, 3}, {1, 2}, {3, 4}}, []int{2, 2, 3, 3, 3}},
		{4, 2, [][]int{{0, 1}, {1, 2}, {2, 3}}, []int{2, 2, 2, 2}},
		{3, 1, [][]int{{0, 1}, {1, 2}}, []int{1, 1, 1}},
		{1, 1, [][]int{}, []int{1}},                                     // extra: single employee, no requests
		{4, 4, [][]int{{0, 1}, {2, 3}, {1, 2}}, []int{4, 4, 4, 4}}, // extra: cap allows full merge
	}

	for _, tc := range tests {
		got := cappedTeamMerges(tc.n, tc.maxSize, tc.requests)
		status := "FAIL"
		if slicesEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s n=%d maxSize=%d requests=%v expected=%v got=%v\n", status, tc.n, tc.maxSize, tc.requests, tc.expected, got)
	}
}
