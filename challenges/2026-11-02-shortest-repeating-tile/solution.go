package main

import (
	"fmt"
	"strings"
)

// shortestTile returns the length of the shortest tile whose repetition,
// cut off at len(s), produces s.
func shortestTile(s string) int {
	// TODO: implement
	return 0
}

func main() {
	type testCase struct {
		s        string
		expected int
	}

	tests := []testCase{
		{"abcabcab", 3},
		{"aabaaab", 4},
		{"abcd", 4},
		{"a", 1},                                         // extra: single character
		{"aaaaaaaa", 1},                                  // extra: one repeated letter
		{"abaababaab", 5},                                // extra: complete repeats
		{strings.Repeat("a", 99999) + "b", 100000},       // extra: large, no shorter tile
		{strings.Repeat("abc", 33333) + "ab", 3},         // extra: large, partial last copy
	}

	for _, tc := range tests {
		got := shortestTile(tc.s)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s len=%d expected=%d got=%d\n", status, len(tc.s), tc.expected, got)
	}
}
