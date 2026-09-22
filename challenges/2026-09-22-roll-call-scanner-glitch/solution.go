package main

import "fmt"

func findScanGlitch(scans []int) []int {
	// TODO: implement
	return []int{0, 0}
}

type testCase struct {
	name     string
	scans    []int
	expected []int
}

func main() {
	tests := []testCase{
		{"example 1", []int{1, 2, 2, 4}, []int{2, 3}},
		{"example 2", []int{1, 1}, []int{1, 2}},
		{"example 3", []int{3, 2, 3, 4, 5, 1}, []int{3, 6}},
		{"edge: duplicate is smallest value, missing is largest", []int{2, 2}, []int{2, 1}},
		{"edge: larger roster", []int{7, 3, 4, 5, 6, 3, 1}, []int{3, 2}},
	}

	for _, tc := range tests {
		got := findScanGlitch(tc.scans)
		status := "FAIL"
		if len(got) == len(tc.expected) && got[0] == tc.expected[0] && got[1] == tc.expected[1] {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
