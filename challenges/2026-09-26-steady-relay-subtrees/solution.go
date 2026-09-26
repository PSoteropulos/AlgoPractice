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

// countSteadySubtrees returns the number of nodes whose subtree is k-steady.
func countSteadySubtrees(root *TreeNode, k int) int {
	// TODO: implement
	return 0
}

func iptr(v int) *int { return &v }

func main() {
	type testCase struct {
		values   []*int
		k        int
		expected int
	}

	tests := []testCase{
		{[]*int{iptr(1), iptr(2), iptr(3), iptr(4), nil}, 1, 4},
		{[]*int{iptr(1), iptr(2), iptr(3), iptr(4), nil}, 0, 2},
		{[]*int{iptr(10), iptr(5), iptr(15), iptr(3), iptr(8), nil, iptr(20), iptr(1)}, 0, 3},
		{[]*int{}, 3, 0},                                              // extra: empty tree
		{[]*int{iptr(5)}, 0, 1},                                       // extra: single node
		{[]*int{iptr(1), iptr(2), nil, iptr(3), nil}, 2, 3},           // extra: left-leaning chain
	}

	for _, tc := range tests {
		root := buildTree(tc.values)
		got := countSteadySubtrees(root, tc.k)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s k=%d expected=%d got=%d\n", status, tc.k, tc.expected, got)
	}
}
