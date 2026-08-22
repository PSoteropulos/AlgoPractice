# Reference Solution: Longest Balanced Parity Subarray

Problem: [`challenges/2026-08-21-longest-balanced-parity-subarray/problem.md`](../../challenges/2026-08-21-longest-balanced-parity-subarray/problem.md)

## Approach

For a subarray `nums[i..j]`, its balance is `|even_count - odd_count|`. The
most direct way to find the longest valid subarray is to fix each left
endpoint `i` and extend the right endpoint `j` one step at a time, keeping a
running count of evens and odds seen so far in the current window. At every
step we can check the current balance in `O(1)` and update the best answer
found so far.

Since `nums.length <= 2000`, the `O(n^2)` pairs of `(i, j)` fit comfortably
within time limits — there is no need for anything fancier for the given
constraints.

```python
from typing import List


def longest_balanced_parity_subarray(nums: List[int], k: int) -> int:
    n = len(nums)
    best = 0
    for i in range(n):
        even = 0
        odd = 0
        for j in range(i, n):
            if nums[j] % 2 == 0:
                even += 1
            else:
                odd += 1
            if abs(even - odd) <= k:
                best = max(best, j - i + 1)
    return best
```

### Why this is correct

- For a fixed `i`, as `j` grows the window only ever gains elements, so the
  running `even`/`odd` counters computed incrementally are exactly the
  counts for `nums[i..j]`.
- Every one of the `O(n^2)` contiguous subarrays is examined exactly once,
  so the maximum length among valid ones is found exactly.
- The empty starting best of `0` correctly handles the case where no
  non-empty subarray satisfies `balance <= k` (e.g. `nums = [2, 4, 6, 8]`,
  `k = 0`).

## Complexity

- **Time:** `O(n^2)` — two nested loops over the array.
- **Space:** `O(1)` extra space beyond the input.

## Follow-up sketch (not required)

An `O(n log n)` solution is possible. Map each element to `+1` (even) or
`-1` (odd) and take prefix sums `P[0..n]` with `P[0] = 0`. The balance of
`nums[i..j-1]` is exactly `|P[j] - P[i]|`. The task becomes: for every `j`,
find the smallest `i < j` such that `P[i]` falls in `[P[j] - k, P[j] + k]`,
maximizing `j - i`. Since `P` changes by exactly `±1` between consecutive
indices, its values are bounded within `[-n, n]`; maintaining a Fenwick
tree (or segment tree) keyed by prefix value that supports "minimum index
with value in a given range" lets each `j` be resolved in `O(log n)`,
giving `O(n log n)` overall.

## Verification

The Python implementation above was run against the examples from
`problem.md` plus extra edge cases (single-element array, an all-even
array with `k = 0`), matching every expected output.
