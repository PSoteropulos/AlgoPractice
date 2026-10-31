package main

import "fmt"

// windowDeviationCosts returns the deviation cost of every window of k
// consecutive readings.
func windowDeviationCosts(nums []int, k int) []int64 {
	// TODO: implement
	return []int64{}
}

func equal(a, b []int64) bool {
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
	big := make([]int, 100000)
	for i := range big {
		if i%2 == 0 {
			big[i] = -1000000000
		} else {
			big[i] = 1000000000
		}
	}

	type testCase struct {
		nums     []int
		k        int
		expected []int64
	}

	tests := []testCase{
		{[]int{1, 3, 2, 6, 4}, 3, []int64{2, 4, 4}},
		{[]int{5, 5, 5, 5}, 2, []int64{0, 0, 0}},
		{[]int{1, 10, 4, 7}, 4, []int64{12}},
		{[]int{9}, 1, []int64{0}},                              // extra: single reading
		{[]int{-3, 8, -1, 2, 2, 9}, 2, []int64{11, 9, 3, 0, 7}}, // extra: negatives, even k
		{[]int{-5, -1, -9, 4}, 3, []int64{8, 13}},              // extra: negatives, odd k
		{big, 100000, []int64{100000000000000}},                // extra: needs 64-bit result
	}

	for _, tc := range tests {
		got := windowDeviationCosts(tc.nums, tc.k)
		status := "FAIL"
		if equal(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s n=%d k=%d expected=%v got=%v\n", status, len(tc.nums), tc.k, tc.expected, got)
	}
}
