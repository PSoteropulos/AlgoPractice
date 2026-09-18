package main

import (
	"fmt"
	"reflect"
)

func registerCallsigns(requests []string) []bool {
	// TODO: implement
	return []bool{}
}

type testCase struct {
	name     string
	input    []string
	expected []bool
}

func main() {
	tests := []testCase{
		{"example 1", []string{"AB12", "AB", "CD9"}, []bool{true, false, true}},
		{"example 2", []string{"NET", "NETA", "NETB"}, []bool{true, false, false}},
		{"example 3", []string{"X", "Y", "XY"}, []bool{true, true, false}},
		{"edge: exact duplicate", []string{"A", "A"}, []bool{true, false}},
		{"edge: chain of prefixes then unrelated", []string{"AB", "ABC", "A"}, []bool{true, false, false}},
	}

	for _, tc := range tests {
		got := registerCallsigns(tc.input)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
