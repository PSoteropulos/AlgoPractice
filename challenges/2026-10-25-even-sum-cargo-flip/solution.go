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

func reverseEvenSumGroups(head *ListNode, k int) *ListNode {
	// TODO: implement
	return nil
}

type testCase struct {
	values   []int
	k        int
	expected []int
}

func main() {
	tests := []testCase{
		{[]int{2, 4, 1, 2, 3, 5, 7}, 2, []int{4, 2, 1, 2, 5, 3, 7}},
		{[]int{1, 2, 4, 6, 2, 2, 9, 9}, 3, []int{1, 2, 4, 2, 2, 6, 9, 9}},
		{[]int{1, 2, 3, 4, 5, 6, 7, 8}, 4, []int{4, 3, 2, 1, 8, 7, 6, 5}},
		{[]int{1, 3}, 2, []int{3, 1}},       // extra: single even batch
		{[]int{1, 2}, 2, []int{1, 2}},       // extra: single odd batch
		{[]int{2, 2}, 3, []int{2, 2}},       // extra: k exceeds n, nothing changes
		{[]int{3, 4, 5}, 1, []int{3, 4, 5}}, // extra: k = 1 changes nothing
	}

	for _, tc := range tests {
		got := toSlice(reverseEvenSumGroups(buildList(tc.values), tc.k))
		status := "FAIL"
		if reflect.DeepEqual(got, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s crates=%v k=%d expected=%v got=%v\n", status, tc.values, tc.k, tc.expected, got)
	}
}
