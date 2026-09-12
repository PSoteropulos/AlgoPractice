package main

import "fmt"

func gondolaUpgradeDistance(capacity []int) []int {
	// TODO: implement
	return nil
}

type testCase struct {
	name     string
	capacity []int
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
		{"example 1", []int{3, 1, 2, 4}, []int{3, 1, 1, -1}},
		{"example 2", []int{5, 5, 5, 5}, []int{-1, -1, -1, -1}},
		{"example 3", []int{2, 4, 3, 6, 1}, []int{1, 2, 1, -1, 1}},
		{"edge: single gondola", []int{1}, []int{-1}},
		{"edge: two gondolas ascending", []int{1, 2}, []int{1, -1}},
	}

	for _, tc := range tests {
		got := gondolaUpgradeDistance(tc.capacity)
		status := "FAIL"
		if slicesEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
