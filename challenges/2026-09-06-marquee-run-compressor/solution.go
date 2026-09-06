package main

import (
	"fmt"
	"strings"
)

func compressMarquee(s string) string {
	// TODO: implement
	return ""
}

type testCase struct {
	name     string
	input    string
	expected string
}

func main() {
	tests := []testCase{
		{"example 1", "AAAABBBCCD", "4A3BCCD"},
		{"example 2", "ABCD", "ABCD"},
		{"example 3", "AABBBBCCCCCC", "AA4B6C"},
		{"edge: empty string", "", ""},
		{"edge: long run", strings.Repeat("A", 12), "12A"},
	}

	for _, tc := range tests {
		got := compressMarquee(tc.input)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%s actual=%s\n", status, tc.name, tc.expected, got)
	}
}
