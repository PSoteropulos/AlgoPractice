# Calm Reading Stretches — Reference Solution

## Approach

If a stretch is calm, every stretch inside it is calm too (its max can only
shrink and its min can only grow). So for each right end `r` there is a smallest
left end `left(r)` such that `readings[left..r]` is calm, and `left(r)` never
moves backwards as `r` grows. That makes a sliding window work.

For each `r`, every start in `[left, r]` gives a calm stretch ending at `r`, so
we add `r - left + 1` to the answer.

To know the window's max and min in amortized O(1), keep two monotonic deques of
indices: one with decreasing values (front = max) and one with increasing values
(front = min). When adding `r`, pop dominated indices from the back. While
`max - min > tolerance`, advance `left` and drop front indices that fell out of
the window.

## Python

```python
from collections import deque
from typing import List


def count_calm_stretches(readings: List[int], tolerance: int) -> int:
    maxq, minq = deque(), deque()  # indices; values decreasing / increasing
    left = 0
    total = 0
    for right, x in enumerate(readings):
        while maxq and readings[maxq[-1]] <= x:
            maxq.pop()
        maxq.append(right)
        while minq and readings[minq[-1]] >= x:
            minq.pop()
        minq.append(right)
        while readings[maxq[0]] - readings[minq[0]] > tolerance:
            left += 1
            if maxq[0] < left:
                maxq.popleft()
            if minq[0] < left:
                minq.popleft()
        total += right - left + 1
    return total


if __name__ == "__main__":
    tests = [
        ([1, 3, 2, 5], 1, 5),
        ([4, 4, 4], 0, 6),
        ([2, 5, 3, 4, 8], 2, 8),
        ([10], 0, 1),
        ([1, 1000000000, 5], 1000000000, 6),
        ([1, 2, 3, 4, 5], 1, 9),
        ([1] * 100000, 0, 5000050000),
    ]
    for r, t, expected in tests:
        assert count_calm_stretches(r, t) == expected
    print("all passed")
```

## Complexity

- Time: `O(n)` — each index is pushed and popped at most once per deque, and
  `left` only moves forward.
- Space: `O(n)` for the deques in the worst case.
