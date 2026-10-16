package main

import "fmt"

func widestSpacing(posts []int, k int) int {
	// TODO: implement
	return 0
}

func main() {
	tests := []struct {
		name     string
		posts    []int
		k        int
		expected int
	}{
		{"example 1", []int{1, 2, 8, 4, 9}, 3, 3},
		{"example 2", []int{5, 5, 5, 5}, 2, 0},
		{"example 3", []int{10, 1, 6}, 2, 9},
		{"edge: lamp on every post", []int{7, 1, 3}, 3, 2},
		{"edge: two posts", []int{1000000000, 1}, 2, 999999999},
		{"edge: uneven clusters", []int{1, 2, 3, 100, 101, 102}, 3, 2},
		{"edge: two lamps spread over many posts", []int{3, 9, 27, 81, 243}, 2, 240},
	}

	for _, t := range tests {
		actual := widestSpacing(append([]int(nil), t.posts...), t.k)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
