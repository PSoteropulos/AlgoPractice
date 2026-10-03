package main

import "fmt"

func countTwinPairs(labels []string) int64 {
	// TODO: implement
	return -1
}

func main() {
	big := make([]string, 100000)
	for i := range big {
		big[i] = "a"
	}

	tests := []struct {
		name     string
		labels   []string
		expected int64
	}{
		{"example 1", []string{"abc", "bca", "cab", "abd"}, 3},
		{"example 2", []string{"aab", "aba", "baa", "aab"}, 6},
		{"example 3", []string{"ab", "ba", "abc"}, 1},
		{"edge: single label", []string{"a"}, 0},
		{"edge: no twins", []string{"abc", "acb", "abd"}, 0},
		{"edge: 100000 identical labels need 64-bit count", big, 4999950000},
	}

	for _, t := range tests {
		in := append([]string(nil), t.labels...)
		actual := countTwinPairs(in)
		status := "FAIL"
		if actual == t.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%d actual=%d\n", status, t.name, t.expected, actual)
	}
}
