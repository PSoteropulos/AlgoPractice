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

// limit guards against accidental cycles in the returned list.
func toList(head *ListNode, limit int) []int {
	result := []int{}
	for node := head; node != nil && len(result) < limit; node = node.Next {
		result = append(result, node.Val)
	}
	return result
}

func pendulumReorder(head *ListNode, k int) *ListNode {
	// TODO: implement
	return head
}

func equalInts(a, b []int) bool {
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

type testCase struct {
	name     string
	values   []int
	k        int
	expected []int
}

func main() {
	tests := []testCase{
		{"example 1", []int{1, 2, 3, 4, 5, 6, 7}, 2, []int{1, 2, 7, 6, 3, 4, 5}},
		{"example 2", []int{1, 2, 3, 4, 5}, 1, []int{1, 5, 2, 4, 3}},
		{"example 3: k > n", []int{10, 20, 30}, 5, []int{10, 20, 30}},
		{"edge: single node", []int{42}, 1, []int{42}},
		{"edge: n=8, k=3, short final front block", []int{1, 2, 3, 4, 5, 6, 7, 8}, 3,
			[]int{1, 2, 3, 8, 7, 6, 4, 5}},
		{"edge: duplicates and negatives", []int{5, -1, 5, 0, -1, 9, 9, 2, 3, 4}, 4,
			[]int{5, -1, 5, 0, 4, 3, 2, 9, -1, 9}},
	}

	for _, tc := range tests {
		head := buildList(tc.values)
		result := pendulumReorder(head, tc.k)
		actual := toList(result, len(tc.values)+1)
		status := "FAIL"
		if equalInts(actual, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("[%s] %s: expected=%v actual=%v\n", status, tc.name, tc.expected, actual)
	}
}
