package main

import "fmt"

// earliestArrival returns the earliest time you can reach island n-1 when
// starting from island 0 at time 0, with scheduled ferries and up to k
// charter vouchers (see problem.md). It returns -1 if island n-1 can't be
// reached.
func earliestArrival(n int, ferries [][]int, k int) int {
	// TODO: implement
	return 0
}

func copyFerries(f [][]int) [][]int {
	c := make([][]int, len(f))
	for i := range f {
		c[i] = append([]int(nil), f[i]...)
	}
	return c
}

func main() {
	type testCase struct {
		name     string
		n        int
		ferries  [][]int
		k        int
		expected int
	}

	chain := make([][]int, 9999)
	for i := range chain {
		chain[i] = []int{i, i + 1, 1, 2}
	}
	ex2 := [][]int{{0, 1, 3, 1}, {1, 4, 2, 20}, {0, 2, 1, 1}, {2, 3, 1, 1}, {3, 4, 6, 1}}
	timedChain := [][]int{{0, 1, 1, 1}, {1, 2, 1, 9}, {2, 3, 1, 9}, {1, 3, 5, 1}}

	tests := []testCase{
		{"example 1", 4, [][]int{{0, 1, 2, 5}, {1, 3, 3, 4}, {0, 2, 4, 3}, {2, 3, 1, 10}}, 0, 7},
		{"example 2", 5, ex2, 1, 5},
		{"example 3", 3, [][]int{{0, 1, 5, 2}}, 2, -1},
		{"extra: example 2 without vouchers", 5, ex2, 0, 8},
		{"extra: parallel routes, slower ride wins", 3, [][]int{{0, 1, 4, 7}, {0, 1, 9, 1}, {1, 2, 3, 5}}, 0, 8},
		{"extra: one voucher can't fix a two-wait chain", 4, timedChain, 1, 6},
		{"extra: two vouchers unlock the chain", 4, timedChain, 2, 3},
		{"extra: 10000-island chain, no vouchers", 10000, chain, 0, 19997},
		{"extra: 10000-island chain, 10 vouchers", 10000, chain, 10, 19977},
	}

	for _, tc := range tests {
		got := earliestArrival(tc.n, copyFerries(tc.ferries), tc.k)
		status := "FAIL"
		if got == tc.expected {
			status = "PASS"
		}
		fmt.Printf("%s %s: expected=%d got=%d\n", status, tc.name, tc.expected, got)
	}
}
