package main

import "fmt"

type ListNode struct {
	Timestamp int
	Steps     int
	Next      *ListNode
}

func buildList(values [][2]int) *ListNode {
	dummy := &ListNode{}
	cur := dummy
	for _, v := range values {
		cur.Next = &ListNode{Timestamp: v[0], Steps: v[1]}
		cur = cur.Next
	}
	return dummy.Next
}

func toList(head *ListNode) [][2]int {
	result := [][2]int{}
	for node := head; node != nil; node = node.Next {
		result = append(result, [2]int{node.Timestamp, node.Steps})
	}
	return result
}

func mergeStepTimelines(headA, headB *ListNode) *ListNode {
	// TODO: implement
	return nil
}

func equalPairs(a, b [][2]int) bool {
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
	a        [][2]int
	b        [][2]int
	expected [][2]int
}

func main() {
	tests := []testCase{
		{"example 1",
			[][2]int{{0, 0}, {30, 1200}, {60, 2500}},
			[][2]int{{15, 600}, {45, 1900}},
			[][2]int{{0, 0}, {15, 600}, {30, 1200}, {45, 1900}, {60, 2500}}},
		{"example 2: tie at timestamp 10",
			[][2]int{{10, 500}, {20, 1000}},
			[][2]int{{10, 480}, {25, 1100}},
			[][2]int{{10, 500}, {10, 480}, {20, 1000}, {25, 1100}}},
		{"example 3: A empty",
			[][2]int{},
			[][2]int{{5, 200}, {10, 450}},
			[][2]int{{5, 200}, {10, 450}}},
		{"edge: both empty",
			[][2]int{},
			[][2]int{},
			[][2]int{}},
		{"edge: B empty",
			[][2]int{{1, 10}, {2, 20}},
			[][2]int{},
			[][2]int{{1, 10}, {2, 20}}},
	}

	for _, tc := range tests {
		headA := buildList(tc.a)
		headB := buildList(tc.b)
		merged := mergeStepTimelines(headA, headB)
		actual := toList(merged)
		status := "FAIL"
		if equalPairs(actual, tc.expected) {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%v actual=%v\n", status, tc.name, tc.expected, actual)
	}
}
