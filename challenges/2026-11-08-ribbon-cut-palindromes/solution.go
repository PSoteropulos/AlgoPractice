package main

import (
	"fmt"
	"reflect"
	"strings"
)

// ribbonCuts returns every way to cut ribbon into palindromic pieces, each of
// length >= minLen, ordered by piece lengths left to right (shorter first).
func ribbonCuts(ribbon string, minLen int) [][]string {
	// TODO: implement
	return [][]string{{"TODO"}}
}

func main() {
	type testCase struct {
		name     string
		s        string
		m        int
		expected []string
	}

	tests := []testCase{
		{"example 1", "aab", 1, []string{"a|a|b", "aa|b"}},
		{"example 2", "abba", 2, []string{"abba"}},
		{"example 3", "aaaaaa", 2, []string{"aa|aa|aa", "aa|aaaa", "aaa|aaa", "aaaa|aa", "aaaaaa"}},
		{"extra: no plan", "abc", 2, []string{}},
		{"extra: single char", "a", 1, []string{"a"}},
		{"extra: all compositions", "aaa", 1, []string{"a|a|a", "a|aa", "aa|a", "aaa"}},
	}

	for _, tc := range tests {
		got := []string{}
		for _, p := range ribbonCuts(tc.s, tc.m) {
			got = append(got, strings.Join(p, "|"))
		}
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%v got=%v\n", status, tc.name, tc.expected, got)
	}
}
