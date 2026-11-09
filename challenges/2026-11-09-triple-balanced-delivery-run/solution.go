package main

import "fmt"

// longestBalancedRun returns the length of the longest contiguous stretch of
// log in which the counts of 'A', 'B' and 'C' are all equal (0 if none).
func longestBalancedRun(log string) int {
	// TODO: implement
	return -1
}

func main() {
	type testCase struct {
		name     string
		log      string
		expected int
	}

	tests := []testCase{
		{"example 1", "AAABCCB", 6},
		{"example 2", "AABBAC", 3},
		{"example 3", "AAAB", 0},
		{"extra: single char", "A", 0},
		{"extra: exactly one of each", "ABC", 3},
		{"extra: balanced in the middle", "CBACBAAAB", 6},
		{"extra: only one category", "AAAAA", 0},
	}

	for _, tc := range tests {
		got := longestBalancedRun(tc.log)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
