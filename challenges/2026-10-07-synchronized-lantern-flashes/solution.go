package main

import "fmt"

func countGrandFlashes(p []int, T int64) int64 {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		p        []int
		T        int64
		expected int64
	}{
		{"example 1", []int{4, 6}, 40, 3},
		{"example 2", []int{5, 7, 35}, 100, 2},
		{"example 3", []int{1000000000, 999999999}, 1000000000000000, 0},
		{"edge: single lantern period 1", []int{1}, 1, 1},
		{"edge: period larger than limit", []int{3}, 2, 0},
		{"edge: duplicate periods", []int{7, 7, 7}, 49, 7},
		{"edge: first nine primes", []int{2, 3, 5, 7, 11, 13, 17, 19, 23}, 1000000000000000, 4482438},
	}

	for _, t := range tests {
		actual := countGrandFlashes(append([]int(nil), t.p...), t.T)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
