package main

import "fmt"

func kthClosestGap(a []int, b []int, k int64) int64 {
	// TODO: implement
	return -1
}

func main() {
	tests := []struct {
		name     string
		a, b     []int
		k        int64
		expected int64
	}{
		{"example 1", []int{8, 1, 4}, []int{6, 2}, 4, 2},
		{"example 2", []int{5, 5}, []int{5}, 2, 0},
		{"example 3", []int{7, -3, 0}, []int{10, -1}, 4, 8},
		{"edge: k = 1 smallest gap", []int{8, 1, 4}, []int{6, 2}, 1, 1},
		{"edge: k = last, largest gap", []int{8, 1, 4}, []int{6, 2}, 6, 6},
		{"edge: extreme values", []int{-1000000000}, []int{1000000000}, 1, 2000000000},
		{"edge: all equal", []int{3, 3, 3}, []int{3, 3}, 6, 0},
	}

	for _, tc := range tests {
		a := append([]int(nil), tc.a...)
		b := append([]int(nil), tc.b...)
		actual := kthClosestGap(a, b, tc.k)
		status := "FAIL"
		if actual == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, tc.name, tc.expected, actual)
	}
}
