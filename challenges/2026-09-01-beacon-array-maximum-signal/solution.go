package main

import "fmt"

func maxBeaconSignal(beacons []int) int {
	// TODO: implement
	return -1
}

type testCase struct {
	name     string
	beacons  []int
	expected int
}

func main() {
	tests := []testCase{
		{"example 1", []int{3, 10, 5, 25, 2, 8}, 31},
		{"example 2", []int{6, 6, 6}, 6},
		{"example 3", []int{42}, 42},
		{"edge: zeros mixed in don't help", []int{0, 0, 5}, 5},
		{"edge: disjoint bits XOR to the OR of all", []int{1, 2, 4, 8}, 15},
	}

	for _, tc := range tests {
		got := maxBeaconSignal(tc.beacons)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, got)
	}
}
