package main

import (
	"fmt"
	"reflect"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func buildList(values []int) *ListNode {
	dummy := &ListNode{}
	cur := dummy
	for _, v := range values {
		cur.Next = &ListNode{Val: v}
		cur = cur.Next
	}
	return dummy.Next
}

func toSlice(head *ListNode) []int {
	out := []int{}
	for ; head != nil; head = head.Next {
		out = append(out, head.Val)
	}
	return out
}

func ridgeLineSorter(head *ListNode) *ListNode {
	// TODO: implement
	return nil
}

func main() {
	tests := []struct {
		name     string
		values   []int
		expected []int
	}{
		{"example 1", []int{1, 4, 6, 5, 2}, []int{1, 2, 4, 5, 6}},
		{"example 2", []int{3, 3, 7, 7, 7, 1, 1}, []int{1, 1, 3, 3, 7, 7, 7}},
		{"example 3", []int{9, 8, 5}, []int{5, 8, 9}},
		{"edge: empty list", []int{}, []int{}},
		{"edge: single node", []int{5}, []int{5}},
		{"edge: already ascending", []int{1, 2, 3}, []int{1, 2, 3}},
		{"edge: all equal", []int{2, 2, 2}, []int{2, 2, 2}},
		{"edge: negatives and plateau at peak", []int{-4, 1, 5, 5, 3, 3, 0, -4, -9}, []int{-9, -4, -4, 0, 1, 3, 3, 5, 5}},
	}

	for _, t := range tests {
		actual := toSlice(ridgeLineSorter(buildList(t.values)))
		status := "FAIL"
		if reflect.DeepEqual(actual, t.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, t.name, t.expected, actual)
	}
}
