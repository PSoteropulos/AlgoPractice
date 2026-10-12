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

// countDescendingWalks returns the number of parent-to-child walks whose
// values sum to target.
func countDescendingWalks(root *TreeNode, target int) int {
	// TODO: implement
	return 0
}

func iptr(v int) *int { return &v }

func main() {
	type testCase struct {
		values   []*int
		target   int
		expected int
	}

	tests := []testCase{
		{[]*int{iptr(5), iptr(3), iptr(-2), iptr(2), iptr(1), nil, iptr(4)}, 5, 2},
		{[]*int{iptr(0), nil, iptr(0), nil, iptr(0)}, 0, 6},
		{[]*int{iptr(2), iptr(-2), nil, iptr(2), nil, iptr(-2)}, 0, 4},
		{[]*int{}, 0, 0},                                                         // extra: empty tree
		{[]*int{iptr(7)}, 7, 1},                                                  // extra: single node hit
		{[]*int{iptr(7)}, 8, 0},                                                  // extra: single node miss
		{[]*int{iptr(1), iptr(2), nil, iptr(3), nil, iptr(4)}, 6, 1},             // extra: walk starts mid-path
	}

	for _, tc := range tests {
		root := buildTree(tc.values)
		got := countDescendingWalks(root, tc.target)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s target=%d expected=%d got=%d\n", status, tc.target, tc.expected, got)
	}
}
