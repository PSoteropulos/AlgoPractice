package main

import "fmt"

// countExactAlarmWindows returns the number of non-empty contiguous windows of
// nums whose bitwise OR is exactly target.
func countExactAlarmWindows(nums []int, target int) int64 {
	// TODO: implement
	return -1
}

func main() {
	type testCase struct {
		name     string
		nums     []int
		target   int
		expected int64
	}

	ones := make([]int, 100000)
	for i := range ones {
		ones[i] = 1
	}

	tests := []testCase{
		{"example 1", []int{1, 2, 3, 4}, 3, 4},
		{"example 2", []int{5, 5, 5}, 5, 6},
		{"example 3", []int{0, 2, 0, 1}, 2, 4},
		{"extra: target zero counts quiet runs", []int{0, 0, 1, 0}, 0, 4},
		{"extra: target bit never appears alone", []int{7}, 3, 0},
		{"extra: stray bit splits windows", []int{4, 1, 2, 4, 2}, 6, 3},
		{"extra: 100000 ones (64-bit answer)", ones, 1, 5000050000},
	}

	for _, tc := range tests {
		got := countExactAlarmWindows(tc.nums, tc.target)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
