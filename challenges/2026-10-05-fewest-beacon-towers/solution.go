package main

import "fmt"

func fewestBeaconTowers(houses []int, r int) int {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		houses   []int
		r        int
		expected int
	}{
		{"example 1", []int{1, 2, 3, 4, 5}, 1, 2},
		{"example 2", []int{1, 5, 9}, 2, 3},
		{"example 3", []int{7, 3, 1, 10, 4, 12, 8}, 3, 2},
		{"edge: single house", []int{42}, 0, 1},
		{"edge: duplicates, r=0", []int{5, 5, 5}, 0, 1},
		{"edge: r=0 distinct", []int{3, 1, 2}, 0, 3},
		{"edge: large values", []int{1000000000, 0, 500000000}, 1000000000, 1},
	}

	for _, t := range tests {
		in := append([]int(nil), t.houses...)
		actual := fewestBeaconTowers(in, t.r)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
