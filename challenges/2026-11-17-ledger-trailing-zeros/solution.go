package main

import "fmt"

// trailingZerosOfProduct returns the number of trailing zeros in the decimal
// form of the product of all values in nums (see problem.md).
func trailingZerosOfProduct(nums []int) int {
	// TODO: implement
	return -1
}

func repeat(v, count int) []int {
	out := make([]int, count)
	for i := range out {
		out[i] = v
	}
	return out
}

func main() {
	type testCase struct {
		name     string
		nums     []int
		expected int
	}

	tests := []testCase{
		{"example 1", []int{25, 8, 3}, 2},
		{"example 2", []int{125, 4, 7, 10}, 3},
		{"example 3", []int{3, 9, 11}, 0},
		{"extra: single 1", []int{1}, 0},
		{"extra: many fives, one two", append(repeat(5, 20), 2), 1},
		{"extra: 2^10 * 5^8", []int{1024, 390625}, 8},
		{"extra: 100000 copies of 10^9", repeat(1000000000, 100000), 900000},
	}

	for _, tc := range tests {
		got := trailingZerosOfProduct(append([]int(nil), tc.nums...))
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
