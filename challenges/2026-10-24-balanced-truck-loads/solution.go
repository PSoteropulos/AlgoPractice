package main

import "fmt"

func minMaxTruckLoad(weights []int, k int) int {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		weights  []int
		k        int
		expected int
	}{
		{"example 1", []int{3,5,2,7}, 2, 9},
		{"example 2", []int{4,4,4,4,4}, 3, 8},
		{"example 3", []int{9,1,1,1}, 2, 9},
		{"edge: single crate", []int{8}, 1, 8},
		{"edge: one crate per truck", []int{7,7,7,7}, 4, 7},
		{"edge: mixed weights", []int{6,5,4,3,3,3}, 3, 9},
		{"edge: split 1..7 over two trucks", []int{1,2,3,4,5,6,7}, 2, 14},
	}

	for _, t := range tests {
		actual := minMaxTruckLoad(append([]int(nil), t.weights...), t.k)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
