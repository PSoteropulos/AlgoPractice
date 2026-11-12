# Exact Alarm Windows — Reference Solution

## Approach

Fix the right end `r` of a window and let the left end `l` move leftward. The
OR of `nums[l..r]` can only **gain** bits as `l` decreases, and every time it
changes it gains at least one new bit. So across all `l` for a fixed `r`, there
are at most about `log2(M) + 1` (≈ 31) **distinct** OR values, and the left ends
that give the same value form one contiguous group.

Keep a short list of `(or_value, count)` pairs for the windows ending at
`r - 1`, ordered from the oldest left ends to the newest. To extend to `r`:

1. OR `nums[r]` into every value in the list (this applies the new reading to
   all windows that end at `r - 1`).
2. Add the new single-element window `[nums[r]]` with count 1.
3. Merge neighbours that now hold the same value. Equal values stay adjacent,
   because the values along the list go from superset to subset.

Then add up the counts of all pairs whose value equals `target`. The total over
all `r` is the answer.

## Python

```python
def count_exact_alarm_windows(nums: list[int], target: int) -> int:
    total = 0
    groups: list[tuple[int, int]] = []  # (OR value, number of left ends)
    for x in nums:
        nxt: list[tuple[int, int]] = []
        for v, c in groups + [(0, 1)]:   # (0, 1) becomes the window [x]
            v |= x
            if nxt and nxt[-1][0] == v:
                nxt[-1] = (v, nxt[-1][1] + c)
            else:
                nxt.append((v, c))
        groups = nxt
        total += sum(c for v, c in groups if v == target)
    return total
```

Python integers do not overflow. In other languages, keep the counts and the
total in 64-bit integers: with `n = 10^5` the answer can reach
`n(n+1)/2 = 5,000,050,000`.

## Complexity

- **Time:** `O(n log M)`, where `M = max(nums)`. Each step handles at most about
  31 groups.
- **Space:** `O(log M)` for the group list.

## Alternative

A window's OR equals `target` exactly when (a) every reading in it is a submask
of `target` (`nums[i] & ~target == 0`), and (b) together the readings cover
every bit of `target`. Split `nums` into maximal runs of readings that satisfy
(a). Inside each run, use two pointers with a counter per bit to count the
windows that cover all of `target`'s bits. This also takes `O(n log M)` time.
