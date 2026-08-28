package main

import (
	"fmt"
	"strings"
)

func undoRedoNotepad(ops []string) string {
	// TODO: implement
	return ""
}

type testCase struct {
	ops      []string
	expected string
}

func main() {
	tests := []testCase{
		{[]string{"TYPE:Hello", "TYPE: World", "UNDO", "TYPE:!", "UNDO", "REDO"}, "Hello!"},
		{[]string{"TYPE:abc", "TYPE:def", "UNDO", "UNDO", "UNDO", "REDO"}, "abc"},
		{[]string{"TYPE:hi", "REDO", "UNDO", "TYPE:there", "REDO"}, "there"},
		{[]string{"UNDO", "REDO", "UNDO"}, ""},                                                       // extra: no TYPE ever happened
		{[]string{"TYPE:a", "UNDO", "TYPE:b", "TYPE:c", "UNDO", "UNDO", "REDO", "REDO"}, "bc"},        // extra: redo chain after multiple undos
	}

	for _, tc := range tests {
		got := undoRedoNotepad(tc.ops)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s ops=%s expected=%q got=%q\n", status, strings.Join(tc.ops, ","), tc.expected, got)
	}
}
