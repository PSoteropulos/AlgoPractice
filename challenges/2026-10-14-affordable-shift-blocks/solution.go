package main

import "fmt"

func affordableShiftBlocks(pay []int, budget int) int64 {
	// TODO: implement
	return 0
}

func main() {
	big := make([]int, 100000)
	for i := range big {
		big[i] = 1
	}
	tests := []struct {
		name     string
		pay      []int
		budget   int
		expected int64
	}{
		{"example 1", []int{2, 1, 3}, 3, 4},
		{"example 2", []int{4, 5}, 3, 0},
		{"example 3", []int{1, 1, 1, 1}, 2, 7},
		{"edge: single shift exactly on budget", []int{5}, 5, 1},
		{"edge: everything affordable", []int{1, 1, 1}, 100, 6},
		{"edge: answer exceeds 32-bit", big, 1000000000, 5000050000},
	}

	for _, t := range tests {
		actual := affordableShiftBlocks(t.pay, t.budget)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
