package main

import "fmt"

func busiestBay(n int, trucks [][]int) int {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		n        int
		trucks   [][]int
		expected int
	}{
		{"example 1", 2, [][]int{{1, 5}, {2, 2}, {3, 1}, {6, 1}}, 0},
		{"example 2", 3, [][]int{{1, 10}, {2, 1}, {3, 1}, {4, 1}, {5, 10}}, 1},
		{"example 3", 3, [][]int{{1, 2}, {1, 2}, {2, 1}, {3, 1}, {3, 5}}, 0},
		{"edge: single bay rejects simultaneous truck", 1, [][]int{{1, 1}, {1, 1}}, 0},
		{"edge: rejections then tie", 2, [][]int{{1, 100}, {1, 100}, {2, 1}, {3, 1}, {4, 1}}, 0},
		{"edge: freed bay reused over higher bay", 3, [][]int{{1, 1}, {1, 5}, {2, 1}, {2, 5}, {3, 1}, {3, 1}}, 0},
	}

	for _, t := range tests {
		actual := busiestBay(t.n, t.trucks)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
