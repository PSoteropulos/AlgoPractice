package main

import "fmt"

func longestDoublingChain(nums []int) int {
	// TODO: implement
	return 0
}

type testCase struct {
	nums     []int
	expected int
}

func main() {
	tests := []testCase{
		{[]int{1, 2, 4, 8, 3, 10}, 4},
		{[]int{-2, -4, -8, -1}, 4},
		{[]int{0, 0, 5}, 1},
		{[]int{7}, 1},       // extra: single element
		{[]int{5, 5, 5}, 1}, // extra: all duplicates, odd, no successor
	}

	for _, tc := range tests {
		got := longestDoublingChain(tc.nums)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s nums=%v expected=%d got=%d\n", status, tc.nums, tc.expected, got)
	}
}
