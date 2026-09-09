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

// findMinBalanceNode returns (value, balance) of the min-balance node,
// first in pre-order on ties.
func findMinBalanceNode(root *TreeNode) (int, int) {
	// TODO: implement
	return 0, 0
}

func iptr(v int) *int { return &v }

func main() {
	type testCase struct {
		values        []*int
		expectedValue int
		expectedBal   int
	}

	tests := []testCase{
		{[]*int{iptr(4), iptr(2), iptr(7), iptr(1), iptr(3), iptr(6), iptr(9)}, 1, 0},
		{[]*int{iptr(1), nil, iptr(2), nil, iptr(3)}, 3, 0},
		{[]*int{iptr(5), iptr(3), iptr(3), iptr(1), iptr(1), iptr(1), iptr(1)}, 5, 0},
		{[]*int{iptr(7)}, 7, 0},                                              // extra: single node
		{[]*int{iptr(1), iptr(2), iptr(100), nil, iptr(3)}, 3, 0},            // extra: winner is mid-traversal
	}

	for _, tc := range tests {
		root := buildTree(tc.values)
		gotValue, gotBal := findMinBalanceNode(root)
		status := "FAIL"
		if gotValue == tc.expectedValue && gotBal == tc.expectedBal {
			status = "PASS"
		}
		fmt.Printf("%s expected=(%d,%d) got=(%d,%d)\n", status, tc.expectedValue, tc.expectedBal, gotValue, gotBal)
	}
}
