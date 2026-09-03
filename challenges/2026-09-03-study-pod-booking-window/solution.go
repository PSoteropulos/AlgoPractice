package main

import "fmt"

func maxBookings(bookings [][]int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	bookings [][]int
	expected int
}

func main() {
	tests := []testCase{
		{[][]int{{1, 3}, {2, 4}, {3, 5}}, 2},
		{[][]int{{0, 1}, {1, 2}, {2, 3}, {3, 4}}, 4},
		{[][]int{{5, 10}, {0, 2}, {3, 6}, {6, 8}, {8, 9}}, 4},
		{[][]int{{2, 5}}, 1},                       // extra: single booking
		{[][]int{{1, 10}, {1, 2}, {1, 3}}, 1},      // extra: same start, only one fits
	}

	for _, tc := range tests {
		got := maxBookings(tc.bookings)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s bookings=%v expected=%d got=%d\n", status, tc.bookings, tc.expected, got)
	}
}
