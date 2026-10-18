package main

import "fmt"

func minTotalFee(fees []int) int64 {
	// TODO: implement
	return -1
}

func main() {
	tests := []struct {
		name     string
		fees     []int
		expected int64
	}{
		{"example 1", []int{4, 1, 5, 2, 3}, 5},
		{"example 2", []int{3, 9, 1, 1}, 3},
		{"example 3", []int{1, 1, 1, 1, 1, 1, 1}, 3},
		{"edge: single dock", []int{7}, 0},
		{"edge: two docks", []int{5, 2}, 5},
		{"edge: eight equal fees", []int{2, 2, 2, 2, 2, 2, 2, 2}, 6},
		{"edge: thirteen unit fees", []int{1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, 5},
		{"edge: large fees", []int{1000000000, 1000000000, 1000000000, 1000000000}, 1000000000},
	}

	for _, t := range tests {
		actual := minTotalFee(append([]int(nil), t.fees...))
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
