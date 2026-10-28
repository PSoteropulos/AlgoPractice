package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// buildTree builds a tree from LeetCode-style compact level-order values.
// A nil entry in values represents a missing child.
func buildTree(values []*int) *TreeNode {
	if len(values) == 0 || values[0] == nil {
		return nil
	}
	root := &TreeNode{Val: *values[0]}
	queue := []*TreeNode{root}
	i := 1
	for len(queue) > 0 && i < len(values) {
		node := queue[0]
		queue = queue[1:]
		if i < len(values) {
			if values[i] != nil {
				node.Left = &TreeNode{Val: *values[i]}
				queue = append(queue, node.Left)
			}
			i++
		}
		if i < len(values) {
			if values[i] != nil {
				node.Right = &TreeNode{Val: *values[i]}
				queue = append(queue, node.Right)
			}
			i++
		}
	}
	return root
}

// countStandouts counts non-root nodes whose value is strictly greater
// than the average of their ancestors.
func countStandouts(root *TreeNode) int {
	// TODO: implement
	return 0
}

func iptr(v int) *int { return &v }

func main() {
	type testCase struct {
		values   []*int
		expected int
	}

	tests := []testCase{
		{[]*int{iptr(10), iptr(4), iptr(12), iptr(3), iptr(5), iptr(13), iptr(20)}, 3},
		{[]*int{iptr(5), nil, iptr(6), nil, iptr(7)}, 2},
		{[]*int{iptr(2), iptr(1), nil, iptr(1), nil, iptr(10)}, 1},
		{[]*int{iptr(7)}, 0},                                      // extra: root alone is never a standout
		{[]*int{iptr(1), iptr(9), nil, iptr(5)}, 1},               // extra: 5 equals avg(1, 9), not strictly greater
		{[]*int{iptr(0), iptr(0), iptr(0), iptr(0)}, 0},           // extra: all zeros
	}

	for _, tc := range tests {
		root := buildTree(tc.values)
		got := countStandouts(root)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s expected=%d got=%d\n", status, tc.expected, got)
	}
}
