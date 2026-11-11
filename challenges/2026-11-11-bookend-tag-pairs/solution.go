package main

import "fmt"

// countBookendPairs counts pairs i < j where tags[i] is both a prefix and a
// suffix of tags[j].
func countBookendPairs(tags []string) int64 {
	// TODO: implement
	return -1
}

func main() {
	big := make([]string, 100000)
	for i := range big {
		big[i] = "q"
	}

	type testCase struct {
		name     string
		tags     []string
		expected int64
	}

	tests := []testCase{
		{"example 1", []string{"a", "aba", "ababa", "aa"}, 4},
		{"example 2", []string{"xyz", "xyzxy", "xy", "xyzxy"}, 2},
		{"example 3", []string{"ab", "b", "ba", "abab"}, 1},
		{"extra: single tag", []string{"zzz"}, 0},
		{"extra: longer before shorter", []string{"aa", "a"}, 0},
		{"extra: nested bookends", []string{"a", "aa", "aaa", "aaaa"}, 6},
		{"extra: 100000 identical tags", big, 4999950000},
	}

	for _, tc := range tests {
		t := append([]string{}, tc.tags...)
		got := countBookendPairs(t)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
