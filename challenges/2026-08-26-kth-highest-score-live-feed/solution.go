package main

import "fmt"

func kthHighestScores(k int, scores []int) []int {
	// TODO: implement
	return nil
}

type testCase struct {
	k        int
	scores   []int
	expected []int
}

func slicesEqual(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}

func main() {
	tests := []testCase{
		{2, []int{3, 5, 10, 1, 7}, []int{-1, 3, 5, 5, 7}},
		{1, []int{4, 4, 4}, []int{4, 4, 4}},
		{3, []int{9, 1}, []int{-1, -1}},
		{1, []int{-5, -1, -10}, []int{-5, -1, -1}}, // extra: negative scores
		{3, []int{2, 8, 5}, []int{-1, -1, 2}},      // extra: k equals length
	}

	for _, tc := range tests {
		got := kthHighestScores(tc.k, tc.scores)
		status := "FAIL"
		if slicesEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s k=%d scores=%v expected=%v got=%v\n", status, tc.k, tc.scores, tc.expected, got)
	}
}
