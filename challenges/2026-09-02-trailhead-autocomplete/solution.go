package main

import "fmt"

func trailheadAutocomplete(markers []string, scores []int, queries []string) [][]string {
	// TODO: implement
	return nil
}

type testCase struct {
	markers  []string
	scores   []int
	queries  []string
	expected [][]string
}

func listOfListsEqual(a, b [][]string) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if len(a[i]) != len(b[i]) {
			return false
		}
		for j := range a[i] {
			if a[i][j] != b[i][j] {
				return false
			}
		}
	}
	return true
}

func main() {
	tests := []testCase{
		{
			[]string{"trailhead", "trailmap", "trailrun", "bridge"},
			[]int{50, 80, 10, 40},
			[]string{"trail", "bri", "zzz"},
			[][]string{{"trailmap", "trailhead", "trailrun"}, {"bridge"}, {}},
		},
		{
			[]string{"cabin", "cave", "camp"},
			[]int{20, 20, 20},
			[]string{"ca"},
			[][]string{{"cabin", "camp", "cave"}},
		},
		{
			[]string{"a", "ab", "abc", "abcd", "abcde"},
			[]int{5, 4, 3, 2, 1},
			[]string{"a"},
			[][]string{{"a", "ab", "abc"}},
		},
		{
			[]string{"lone"},
			[]int{1},
			[]string{"lone", "lon", "x"},
			[][]string{{"lone"}, {"lone"}, {}},
		},
		{
			[]string{"oak", "oakley", "oaks"},
			[]int{3, 3, 5},
			[]string{"oak"},
			[][]string{{"oaks", "oak", "oakley"}},
		},
	}

	for _, tc := range tests {
		got := trailheadAutocomplete(tc.markers, tc.scores, tc.queries)
		status := "FAIL"
		if listOfListsEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s queries=%v expected=%v got=%v\n", status, tc.queries, tc.expected, got)
	}
}
