package main

import (
	"fmt"
	"strings"
)

// minDialRotations returns the minimum number of single-notch left/right
// turns that make the dial read target, or -1 if impossible (see problem.md).
func minDialRotations(ring string, target string) int {
	// TODO: implement
	return -2
}

func main() {
	type testCase struct {
		name     string
		ring     string
		target   string
		expected int
	}

	longRing := strings.Repeat("a", 99999) + "b"
	longTarget := strings.Repeat("a", 49999) + "b" + strings.Repeat("a", 50000)

	tests := []testCase{
		{"example 1", "abcde", "deabc", 2},
		{"example 2", "abcabcabc", "cabcabcab", 1},
		{"example 3", "abc", "acb", -1},
		{"extra: already aligned", "xyz", "xyz", 0},
		{"extra: single letter", "q", "q", 0},
		{"extra: anagram but not a rotation", "aabb", "abab", -1},
		{"extra: long ring, lone 'b' halfway around", longRing, longTarget, 50000},
	}

	for _, tc := range tests {
		got := minDialRotations(tc.ring, tc.target)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
