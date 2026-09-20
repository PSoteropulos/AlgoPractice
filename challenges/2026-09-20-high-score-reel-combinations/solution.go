package main

import (
	"fmt"
	"reflect"
)

func highScoreCombinations(reels [][]byte, bannedPrefixes []string) []string {
	// TODO: implement
	return []string{}
}

type testCase struct {
	name     string
	reels    [][]byte
	banned   []string
	expected []string
}

func main() {
	tests := []testCase{
		{
			"example 1",
			[][]byte{{'A', 'B'}, {'C', 'D'}, {'E', 'F'}},
			[]string{"BD"},
			[]string{"ACE", "ACF", "ADE", "ADF", "BCE", "BCF"},
		},
		{
			"example 2",
			[][]byte{{'X'}, {'Y', 'Z'}, {'A', 'B', 'C'}},
			[]string{"XZ", "XYB"},
			[]string{"XYA", "XYC"},
		},
		{
			"example 3",
			[][]byte{{'A'}, {'B'}, {'C'}},
			[]string{},
			[]string{"ABC"},
		},
		{
			"edge: first letter banned prunes everything",
			[][]byte{{'A'}, {'B'}, {'C'}},
			[]string{"A"},
			[]string{},
		},
		{
			"edge: mid-level banned prefix prunes a branch",
			[][]byte{{'P', 'Q'}, {'R'}, {'S', 'T'}},
			[]string{"QR"},
			[]string{"PRS", "PRT"},
		},
	}

	for _, tc := range tests {
		got := highScoreCombinations(tc.reels, tc.banned)
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, got)
	}
}
