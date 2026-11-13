package main

import "fmt"

// minBatterySwaps returns the minimum number of battery swaps the drone needs
// to reach destination, or -1 if it is unreachable.
func minBatterySwaps(stations []int, destination int, batteryRange int) int {
	// TODO: implement
	return -1
}

func main() {
	type testCase struct {
		name         string
		stations     []int
		destination  int
		batteryRange int
		expected     int
	}

	spaced := make([]int, 100000)
	for i := range spaced {
		spaced[i] = 10 * (i + 1)
	}

	tests := []testCase{
		{"example 1", []int{3, 7, 9, 14}, 16, 6, 3},
		{"example 2", []int{2, 4}, 5, 5, 0},
		{"example 3", []int{2, 5, 11}, 15, 5, -1},
		{"extra: no stations, too far", []int{}, 10, 3, -1},
		{"extra: exact-boundary hops", []int{4}, 8, 4, 1},
		{"extra: must use every station", []int{1, 2, 3, 4}, 5, 1, 4},
		{"extra: 100000 evenly spaced stations", spaced, 1000010, 10, 100000},
	}

	for _, tc := range tests {
		got := minBatterySwaps(tc.stations, tc.destination, tc.batteryRange)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
