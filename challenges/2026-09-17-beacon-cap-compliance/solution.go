package main

import "fmt"

func capCompliance(cap int, powers []int) (int, int) {
	// TODO: implement
	return 0, -1
}

type testCase struct {
	name        string
	cap         int
	powers      []int
	expectCount int
	expectMax   int
}

func main() {
	tests := []testCase{
		{"example 1", 6, []int{2, 4, 6, 7, 1}, 3, 6},
		{"example 2", 0, []int{0, 0, 0}, 3, 0},
		{"example 3", 5, []int{8, 16}, 0, -1},
		{"edge: single drone equal to cap", 9, []int{9}, 1, 9},
		{"edge: even cap excludes bit 0", 1_000_000_000, []int{0, 1}, 1, 0},
	}

	for _, tc := range tests {
		gotCount, gotMax := capCompliance(tc.cap, tc.powers)
		status := "FAIL"
		if gotCount == tc.expectCount && gotMax == tc.expectMax {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=(%d, %d) actual=(%d, %d)\n", status, tc.name, tc.expectCount, tc.expectMax, gotCount, gotMax)
	}
}
