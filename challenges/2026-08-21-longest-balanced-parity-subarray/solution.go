// Longest Balanced Parity Subarray
//
// See problem.md for the full statement.

package main

import "fmt"

func longestBalancedParitySubarray(nums []int, k int) int {
	// TODO: implement
	n := len(nums)
	even := 0
	odd := 0
	diff := 0
	_ = n
	_ = even
	_ = odd
	return diff // placeholder, remove me
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

type testCase struct {
	nums     []int
	k        int
	expected int
}

func runSelfChecks() {
	cases := []testCase{
		{[]int{1, 2, 3, 4, 5}, 1, 5},
		{[]int{2, 4, 6, 1, 3}, 0, 4},
		{[]int{2, 4, 6, 8}, 2, 2},
		{[]int{7}, 5, 1},
		{[]int{2, 4, 6, 8}, 0, 0},
	}

	allPassed := true
	for i, c := range cases {
		numsCopy := make([]int, len(c.nums))
		copy(numsCopy, c.nums)
		actual := longestBalancedParitySubarray(numsCopy, c.k)
		status := "PASS"
		if actual != c.expected {
			status = "FAIL"
			allPassed = false
		}
		fmt.Printf("Case %d: %s (nums=%v, k=%d -> got %d, expected %d)\n",
			i+1, status, c.nums, c.k, actual, c.expected)
	}

	if allPassed {
		fmt.Println("All cases passed.")
	} else {
		fmt.Println("Some cases failed.")
	}
}

func main() {
	runSelfChecks()
}
