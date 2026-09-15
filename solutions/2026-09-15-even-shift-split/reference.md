# Reference Solution: Even Shift Split

## Approach

This is a classic **binary search on the answer** problem. We are not
searching for a value's position in a sorted array — we are searching over
the space of *possible answers* (the maximum load any worker could carry)
for the smallest one that is achievable.

**Key observation.** Define `feasible(cap)` as: "can `hourly` be split into
at most `shifts` contiguous, non-empty blocks such that every block's sum is
`<= cap`?" This predicate is **monotonic** in `cap`: if a given `cap` is
feasible, any larger `cap` is also feasible (you can always merge blocks
together without exceeding a bigger budget). That monotonicity is exactly
what makes binary search valid here — we search for the smallest `cap` for
which `feasible(cap)` is true.

**Search bounds.**
- The lower bound is `max(hourly)`: no matter how we split, the block
  containing the single largest hour has a load of at least that hour's
  value, so `cap` can never go below it.
- The upper bound is `sum(hourly)`: putting the entire array into one block
  (using only 1 of the `shifts` workers) always satisfies `blocks <= shifts`
  since `shifts >= 1`.

**Checking feasibility greedily.** For a candidate `cap`, greedily walk
`hourly` left to right, accumulating a running block sum. Whenever adding
the next hour would push the running sum past `cap`, close the current
block (increment the block count) and start a new block with that hour.
This greedy approach uses the *minimum possible number of blocks* for that
`cap` — proof: delaying a cut only ever risks needing an *earlier* forced
cut later (or exceeding `cap`), never helps, since every block sum is
already `<= cap` when we choose to cut. So if the greedy block count is
`<= shifts`, `cap` is feasible; if the greedy count already exceeds
`shifts`, no arrangement can do better for that `cap`.

**Binary search loop.** Starting with `lo = max(hourly)`, `hi =
sum(hourly)`, repeatedly test `mid = (lo + hi) // 2`:
- If `feasible(mid)`, the answer could be `mid` or smaller → `hi = mid`.
- Otherwise the answer must be larger → `lo = mid + 1`.

The loop ends when `lo == hi`, which is the minimum feasible cap.

## Reference implementation (Python)

```python
from typing import List


def min_max_load(hourly: List[int], shifts: int) -> int:
    lo, hi = max(hourly), sum(hourly)

    def feasible(cap: int) -> bool:
        blocks = 1
        current = 0
        for x in hourly:
            if current + x > cap:
                blocks += 1
                current = x
            else:
                current += x
        return blocks <= shifts

    while lo < hi:
        mid = (lo + hi) // 2
        if feasible(mid):
            hi = mid
        else:
            lo = mid + 1
    return lo
```

## Walkthrough on Example 1

`hourly = [10, 20, 30, 40]`, `shifts = 2`. Search range starts at
`lo = 40`, `hi = 100`.

- `mid = 70`: greedily, `10+20+30=60 <= 70`, then `40` would make `100 >
  70`, so cut → block 2 starts at `40`, ends there. Total blocks = 2, which
  is `<= 2` → feasible. Set `hi = 70`.
- `mid = 55`: `10+20=30`, adding `30` gives `60 > 55` → cut (block 1 =
  `[10,20]`). Block 2 starts at `30`, adding `40` gives `70 > 55` → cut
  again (block 2 = `[30]`). Block 3 = `[40]`. Total blocks = 3 > 2 →
  infeasible. Set `lo = 56`.
- `mid = 63`: `10+20+30=60 <= 63`, `40` would make `100 > 63` → cut. Blocks
  = 2 → feasible. Set `hi = 63`.
- Continue narrowing... the loop converges to `lo = hi = 60`, matching the
  expected output.

## Complexity

- **Time:** `O(n log S)`, where `S = sum(hourly)`. Each `feasible` check is
  `O(n)`, and the binary search performs `O(log S)` iterations.
- **Space:** `O(1)` beyond the input array.

## Follow-up notes

To reconstruct the actual boundaries, run `feasible(answer)` one final time
(where `answer` is the value the binary search converged to), but instead of
just counting blocks, record the index where each cut occurs. This adds no
extra asymptotic cost — it's the same `O(n)` greedy pass, just also
collecting cut positions instead of discarding them.
