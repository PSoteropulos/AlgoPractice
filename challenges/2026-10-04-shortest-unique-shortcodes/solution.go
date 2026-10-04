package main

import (
	"fmt"
	"reflect"
)

func shortestUniqueShortcodes(names []string) []string {
	// TODO: implement
	return nil
}

func main() {
	tests := []struct {
		name     string
		names    []string
		expected []string
	}{
		{"example 1", []string{"apple", "apply", "ape", "bat"}, []string{"apple", "apply", "ape", "b"}},
		{"example 2", []string{"zebra", "zoo", "zone", "yak"}, []string{"ze", "zoo", "zon", "y"}},
		{"example 3", []string{"ab", "abc", "abcd"}, []string{"ab", "abc", "abcd"}},
		{"edge: single name", []string{"hello"}, []string{"h"}},
		{"edge: single letters", []string{"a", "b", "c"}, []string{"a", "b", "c"}},
		{"edge: deep shared prefix", []string{"xxxxa", "xxxxb"}, []string{"xxxxa", "xxxxb"}},
	}

	for _, t := range tests {
		in := append([]string(nil), t.names...)
		actual := shortestUniqueShortcodes(in)
		status := "FAIL"
		if reflect.DeepEqual(actual, t.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, t.name, t.expected, actual)
	}
}
