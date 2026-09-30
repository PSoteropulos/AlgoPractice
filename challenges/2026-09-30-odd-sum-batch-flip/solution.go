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
	result := []int{}
	for node := head; node != nil; node = node.Next {
		result = append(result, node.Val)
	}
	return result
}

func flipOddBatches(head *ListNode, k int) *ListNode {
	// TODO: implement
	return nil
}

func main() {
	tests := []struct {
		name     string
		values   []int
		k        int
		expected []int
	}{
		{"example 1", []int{1, 2, 3, 4, 5, 6}, 3, []int{1, 2, 3, 6, 5, 4}},
		{"example 2", []int{2, 7, 4, 2, 8, 5, 9}, 2, []int{7, 2, 4, 2, 5, 8, 9}},
		{"example 3: fewer than k nodes", []int{5, 3, 1}, 4, []int{5, 3, 1}},
		{"edge: empty list", []int{}, 2, []int{}},
		{"edge: k = 1 never changes anything", []int{1, 2, 3}, 1, []int{1, 2, 3}},
		{"edge: whole list is one odd batch", []int{1, 2, 4}, 3, []int{4, 2, 1}},
		{"edge: all even sums", []int{0, 0, 0, 0}, 2, []int{0, 0, 0, 0}},
		{"edge: consecutive odd batches", []int{1, 2, 3, 4, 5, 6}, 2, []int{2, 1, 4, 3, 6, 5}},
	}

	for _, tc := range tests {
		actual := toSlice(flipOddBatches(buildList(tc.values), tc.k))
		status := "FAIL"
		if reflect.DeepEqual(actual, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, actual)
	}
}
