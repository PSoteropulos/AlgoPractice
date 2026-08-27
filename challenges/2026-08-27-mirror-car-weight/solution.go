package main

import "fmt"

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

func mirrorCarWeight(head *ListNode, k int) int {
	// TODO: implement
	return -1
}

type testCase struct {
	values   []int
	k        int
	expected int
}

func main() {
	tests := []testCase{
		{[]int{10, 20, 30, 40, 50}, 2, 40},
		{[]int{9}, 1, 9},
		{[]int{3, 6, 9}, 5, -1},
		{[]int{7, 14}, 1, 14},     // extra: mirror maps to the last car
		{[]int{1, 2, 3, 4}, 4, 1}, // extra: k equals n, mirror maps to the first car
	}

	for _, tc := range tests {
		head := buildList(tc.values)
		got := mirrorCarWeight(head, tc.k)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s cars=%v k=%d expected=%d got=%d\n", status, tc.values, tc.k, tc.expected, got)
	}
}
