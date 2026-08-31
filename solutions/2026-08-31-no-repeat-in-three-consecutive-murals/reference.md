# Reference Solution: No Repeat in Three Consecutive Murals

## Approach

The constraint "no theme repeats among any 3 consecutive panels" only ever
looks back 2 panels, so the only state we need to carry forward while
scanning left to right is **the themes of the previous two panels**.

Define `dp[(a, b)]` = minimum cost to paint every panel up through the
current one, given that the second-to-last painted panel used theme `a` and
the last painted panel used theme `b` (`a != b`).

- **Base case (`n == 1`):** no constraint applies at all — answer is
  `min(cost[0])`.
- **Base case (`n >= 2`):** initialize `dp[(a, b)] = cost[0][a] + cost[1][b]`
  for every pair of distinct themes `a != b`.
- **Transition:** to extend the painted prefix by one more panel `i` with
  theme `c`, `c` must differ from both `a` and `b` of the state it extends
  (`c != a` handles the "3 consecutive" rule, `c != b` handles the adjacent
  rule). So:

  ```
  new_dp[(b, c)] = min over valid a of dp[(a, b)]  +  cost[i][c]
  ```

  for every `b != c`.

- **Answer:** once all `n` panels are processed, the answer is the minimum
  value across all remaining `dp` states.

This is a direct generalization of the classic "paint houses, no two
adjacent the same" DP, extended by one extra step of lookback state.

```python
def min_mural_cost(n: int, k: int, cost: list[list[int]]) -> int:
    if n == 1:
        return min(cost[0])

    # dp[(a, b)] = min cost through panel 1, with panel 0 = a, panel 1 = b
    dp = {}
    for a in range(k):
        for b in range(k):
            if a != b:
                dp[(a, b)] = cost[0][a] + cost[1][b]

    for i in range(2, n):
        new_dp = {}
        for b in range(k):
            # best cost achievable ending in theme b, minimized over the
            # theme two panels back (a), excluding a == b (already
            # enforced) -- we need this per-candidate-c below since c also
            # has to differ from a.
            for c in range(k):
                if c == b:
                    continue
                best = None
                for a in range(k):
                    if a == b or a == c:
                        continue
                    key = (a, b)
                    if key in dp and (best is None or dp[key] < best):
                        best = dp[key]
                if best is not None:
                    new_dp[(b, c)] = best + cost[i][c]
        dp = new_dp

    return min(dp.values())
```

## Complexity

- **Time:** `O(n * k^3)` — for each of the `n` panels we consider every
  `(b, c)` pair (`O(k^2)`) and, for each, scan every candidate `a`
  (`O(k)`).
- **Space:** `O(k^2)` — only the current and next `dp` layers (each keyed by
  a pair of themes) are kept in memory at once.

### Speeding up the inner loop (optional)

For each fixed `b`, the value `best` only needs to exclude at most one `a`
value (`a == c`, since `a == b` is already excluded by construction of
`dp`). So for each `b`, precompute the minimum and second-minimum of
`dp[(a, b)]` over all valid `a`; then for any `c`, `best` is the minimum
excluding `a == c`, which is the precomputed minimum unless the minimizing
`a` equals `c`, in which case fall back to the second-minimum. This drops
the complexity to `O(n * k^2)`, but is not required to pass under the
given constraints (`n <= 2000`, `k <= 50` → `n * k^3 <= 2.5 * 10^8`, which
is acceptable for this practice problem).
