package main

import "fmt"

func peakPlateauTotal(h []int) int {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		h        []int
		expected int
	}{
		{"example 1", []int{1, 3, 3, 2, 2, 5, 4, 4, 4}, 3},
		{"example 2", []int{7, 7, 7}, 3},
		{"example 3", []int{1, 2, 3, 4}, 1},
		{"edge: single element", []int{9}, 1},
		{"edge: valley between peaks", []int{5, 1, 5}, 2},
		{"edge: alternating with wide ends", []int{2, 2, 1, 2, 1, 1}, 3},
		{"edge: descending negatives", []int{-1, -2, -2, -3}, 1},
	}

	for _, t := range tests {
		actual := peakPlateauTotal(append([]int(nil), t.h...))
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
