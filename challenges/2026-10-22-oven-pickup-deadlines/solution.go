package main

import "fmt"

func maxOrders(orders [][]int) int {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		orders   [][]int
		expected int
	}{
		{"example 1", [][]int{{3, 5}, {2, 6}, {4, 7}}, 2},
		{"example 2", [][]int{{5, 5}, {4, 6}, {2, 6}, {1, 8}}, 3},
		{"example 3", [][]int{{2, 2}, {2, 2}, {2, 4}}, 2},
		{"edge: bake time exceeds deadline", [][]int{{6, 5}}, 0},
		{"edge: identical tight orders", [][]int{{1, 1}, {1, 1}, {1, 1}}, 1},
		{"edge: unsorted input, swap needed", [][]int{{100, 200}, {200, 1300}, {1000, 1250}, {2000, 3200}}, 3},
		{"edge: maximum values", [][]int{{1000000000, 1000000000}, {1000000000, 1000000000}, {999999999, 1000000000}}, 1},
	}

	for _, t := range tests {
		copied := make([][]int, len(t.orders))
		for i, o := range t.orders {
			copied[i] = append([]int(nil), o...)
		}
		actual := maxOrders(copied)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
