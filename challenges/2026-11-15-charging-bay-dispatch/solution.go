package main

import "fmt"

// assignBays returns result where result[i] = [bay, finishTime] for bus i,
// following the dispatch rules in problem.md (shortest duration first, ties
// by earlier arrival then smaller index; lowest-numbered free bay).
func assignBays(vehicles [][]int, m int) [][]int {
	// TODO: implement
	return [][]int{}
}

func sameResult(a, b [][]int) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if len(a[i]) != 2 || a[i][0] != b[i][0] || a[i][1] != b[i][1] {
			return false
		}
	}
	return true
}

func copyVehicles(v [][]int) [][]int {
	c := make([][]int, len(v))
	for i := range v {
		c[i] = append([]int(nil), v[i]...)
	}
	return c
}

func main() {
	type testCase struct {
		name     string
		vehicles [][]int
		m        int
		expected [][]int
	}

	many := make([][]int, 100000)
	manyExpected := make([][]int, 100000)
	for i := range many {
		many[i] = []int{0, 1}
		manyExpected[i] = []int{0, i + 1}
	}

	tests := []testCase{
		{"example 1", [][]int{{0, 5}, {1, 2}, {1, 1}, {2, 3}, {6, 1}}, 2,
			[][]int{{0, 5}, {1, 4}, {1, 2}, {1, 7}, {0, 7}}},
		{"example 2", [][]int{{3, 2}, {0, 4}, {2, 2}, {4, 1}}, 1,
			[][]int{{0, 9}, {0, 4}, {0, 7}, {0, 5}}},
		{"example 3", [][]int{{0, 4}, {0, 4}, {2, 1}, {3, 2}}, 3,
			[][]int{{0, 4}, {1, 4}, {2, 3}, {2, 5}}},
		{"extra: idle gap between arrivals", [][]int{{0, 1}, {10, 1}}, 1,
			[][]int{{0, 1}, {0, 11}}},
		{"extra: full ties broken by index", [][]int{{5, 3}, {5, 3}, {5, 3}, {0, 10}}, 2,
			[][]int{{1, 8}, {1, 11}, {0, 13}, {0, 10}}},
		{"extra: more bays than buses", [][]int{{7, 3}, {7, 3}}, 5,
			[][]int{{0, 10}, {1, 10}}},
		{"extra: 100000 buses, one bay", many, 1, manyExpected},
	}

	for _, tc := range tests {
		got := assignBays(copyVehicles(tc.vehicles), tc.m)
		status := "FAIL"
		if sameResult(got, tc.expected) {
			status = "PASS"
		}
		if len(tc.expected) > 10 {
			fmt.Printf("%s %s\n", status, tc.name)
		} else {
			fmt.Printf("%s %s: expected=%v got=%v\n", status, tc.name, tc.expected, got)
		}
	}
}
