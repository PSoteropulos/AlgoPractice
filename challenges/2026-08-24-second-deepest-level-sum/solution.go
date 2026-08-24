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

func secondDeepestLevelSum(root *TreeNode) int {
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
		{[]*int{iptr(1), iptr(2), iptr(3), iptr(4), iptr(5)}, 5},
		{[]*int{iptr(10)}, 0},
		{[]*int{iptr(1), iptr(2), nil, iptr(3), nil, iptr(4), nil}, 3},
		{[]*int{}, 0}, // extra: empty tree
		{[]*int{iptr(5), iptr(3), iptr(8)}, 5}, // extra: two levels
	}

	for _, tc := range tests {
		root := buildTree(tc.values)
		got := secondDeepestLevelSum(root)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s expected=%d got=%d\n", status, tc.expected, got)
	}
}
