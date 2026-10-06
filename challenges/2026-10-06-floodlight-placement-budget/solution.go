package main

import "fmt"

func minFloodlightCost(x []int, w []int, c int64) int64 {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		x, w     []int
		c        int64
		expected int64
	}{
		{"example 1", []int{1, 2, 6, 7, 8}, []int{3, 1, 2, 2, 1}, 5, 14},
		{"example 2", []int{0, 10, 20}, []int{1, 1, 1}, 100, 120},
		{"example 3", []int{4}, []int{7}, 3, 3},
		{"edge: free lights, every stall lit", []int{0, 5}, []int{2, 2}, 0, 0},
		{"edge: uniform line", []int{0, 1, 2, 3, 4, 5}, []int{1, 1, 1, 1, 1, 1}, 2, 8},
		{"edge: large answer", []int{0, 1000000, 2000000, 3000000}, []int{10000, 10000, 10000, 10000}, 1000000000, 4000000000},
	}

	for _, t := range tests {
		actual := minFloodlightCost(append([]int(nil), t.x...), append([]int(nil), t.w...), t.c)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
