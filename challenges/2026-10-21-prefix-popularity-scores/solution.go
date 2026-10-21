package main

import (
	"fmt"
	"reflect"
)

func prefixPopularity(words []string, k int) []int64 {
	// TODO: implement
	return nil
}

func main() {
	tests := []struct {
		name     string
		words    []string
		k        int
		expected []int64
	}{
		{"example 1", []string{"abc", "ab", "bc", "b"}, 2, []int64{3, 2, 1, 0}},
		{"example 2", []string{"aa", "aa", "a"}, 1, []int64{5, 5, 3}},
		{"example 3", []string{"cat", "car", "cart", "dog"}, 3, []int64{1, 2, 3, 1}},
		{"edge: k longer than every word", []string{"z"}, 2, []int64{0}},
		{"edge: duplicate single letters", []string{"a", "a"}, 1, []int64{2, 2}},
		{"edge: triple duplicate words", []string{"ab", "ab", "ab"}, 1, []int64{6, 6, 6}},
		{"edge: nested shared stems", []string{"hello", "help", "he"}, 2, []int64{7, 6, 3}},
	}

	for _, t := range tests {
		actual := prefixPopularity(append([]string(nil), t.words...), t.k)
		status := "FAIL"
		if reflect.DeepEqual(actual, t.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, t.name, t.expected, actual)
	}
}
