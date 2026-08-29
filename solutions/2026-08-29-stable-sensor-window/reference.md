# Stable Sensor Window — Reference Solution

## Approach

This is a classic **sliding window with two monotonic deques**. As the
right end of the window advances, maintain:

- `maxDeque`: indices of the current window, kept in *decreasing* order of
  `readings` value, so `readings[maxDeque[0]]` is always the window's max.
- `minDeque`: indices of the current window, kept in *increasing* order of
  `readings` value, so `readings[minDeque[0]]` is always the window's min.

For each new index `right`:

1. Pop from the back of `maxDeque` while its value is `<= readings[right]`
   (those entries can never be the max again), then push `right`.
2. Pop from the back of `minDeque` while its value is `>= readings[right]`
   (symmetric reasoning for the min), then push `right`.
3. While the window's current max-min gap
   (`readings[maxDeque[0]] - readings[minDeque[0]]`) exceeds `tolerance`,
   advance `left` by one, dropping any deque front whose index fell out of
   the window (`< left`).
4. The window `[left, right]` is now stable (or the array is too short to
   have grown a window yet); update `best = max(best, right - left + 1)`.

Because both deques only ever push each index once and pop it at most
once, and `left` only ever moves forward, the whole scan is linear.

```python
from collections import deque
from typing import List


def longest_stable_window(readings: List[int], tolerance: int) -> int:
    if not readings:
        return 0

    max_deque: deque[int] = deque()  # indices, decreasing values
    min_deque: deque[int] = deque()  # indices, increasing values
    left = 0
    best = 0

    for right, val in enumerate(readings):
        while max_deque and readings[max_deque[-1]] <= val:
            max_deque.pop()
        max_deque.append(right)

        while min_deque and readings[min_deque[-1]] >= val:
            min_deque.pop()
        min_deque.append(right)

        while readings[max_deque[0]] - readings[min_deque[0]] > tolerance:
            left += 1
            if max_deque[0] < left:
                max_deque.popleft()
            if min_deque[0] < left:
                min_deque.popleft()

        best = max(best, right - left + 1)

    return best
```

## Why this is correct

- The deques are standard "sliding window maximum/minimum" structures: an
  index is safe to discard from the back the moment a later, more extreme
  value enters the window, because that later value will always beat it
  as a candidate for max (or min) for as long as they're both in the
  window. This means the front of each deque is always the extreme value
  currently in `[left, right]`.
- The inner `while` loop only shrinks the window when it's actually
  invalid (gap `> tolerance`), and it shrinks by exactly one index at a
  time, correctly evicting deque fronts once they fall behind `left`. This
  guarantees `[left, right]` is the *widest* valid window ending at
  `right` (shrinking stops the instant it becomes valid again, and the
  window was valid one step before the last expansion since `left` never
  moves backward).
- Taking `best` as the max over every `right` therefore considers the best
  possible window ending at each position, which covers every span in the
  array.
- Example 3's all-equal array with `tolerance = 0` naturally never
  triggers the shrink loop (gap is always `0`), so the window grows to
  cover the whole array, matching the expected output of `6`.

## Complexity

- **Time:** O(n) — each index is pushed onto each deque exactly once and
  popped from each deque at most once (from either end), and `left`
  advances at most `n` times total across the whole run.
- **Space:** O(n) in the worst case for the two deques (e.g. a strictly
  increasing or strictly decreasing array keeps every index in one of
  them).
