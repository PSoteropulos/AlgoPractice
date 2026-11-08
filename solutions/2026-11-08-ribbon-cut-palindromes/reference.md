# Ribbon Cut Palindromes — Reference Solution

## Approach

Backtracking over cut positions. Precompute `is_pal[i][j]` (is `ribbon[i..j]` a
palindrome) with a DP table: `ribbon[i] == ribbon[j]` and the inside
`is_pal[i+1][j-1]` is a palindrome (or the span has length <= 2).

`dfs(start)` extends the current plan with every palindromic piece
`ribbon[start..end]` of length >= `min_len`, trying the **shortest end first**,
and recurses at `end + 1`. When `start == n`, the plan is complete and copied
out. Trying shorter pieces first yields plans already in the required order
(comparison by piece lengths left to right), so no sorting is needed.

## Python

```python
from typing import List


def ribbon_cuts(ribbon: str, min_len: int) -> List[List[str]]:
    """Return every way to cut `ribbon` into palindromic pieces, each of
    length >= min_len, ordered by piece lengths left to right (shorter first)."""
    n = len(ribbon)
    # is_pal[i][j] is True when ribbon[i..j] is a palindrome
    is_pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            if ribbon[i] == ribbon[j] and (j - i < 2 or is_pal[i + 1][j - 1]):
                is_pal[i][j] = True

    plans: List[List[str]] = []
    path: List[str] = []

    def dfs(start: int) -> None:
        if start == n:
            plans.append(path[:])
            return
        # try shorter first pieces first -> required ordering
        for end in range(start + min_len - 1, n):
            if is_pal[start][end]:
                path.append(ribbon[start:end + 1])
                dfs(end + 1)
                path.pop()

    dfs(0)
    return plans
```

## Complexity

- Precomputation: O(n^2) time and space.
- Search: the number of plans can be exponential (up to 2^(n-1) when every
  substring is a palindrome and `min_len = 1`), and copying each plan costs O(n),
  so worst-case time is O(n * 2^n). Recursion depth and extra space besides the
  output are O(n^2) for the table plus O(n) for the path.
