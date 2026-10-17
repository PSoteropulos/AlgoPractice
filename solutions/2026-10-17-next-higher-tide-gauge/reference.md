# Next Higher Tide Gauge — Reference Solution

## Approach

Scan the days left to right while keeping a stack of indices of days that are
still waiting for a higher level. The levels of the days on the stack are
non-increasing from bottom to top. When day `i` arrives, every waiting day on
top of the stack with a level strictly below `levels[i]` has found its answer:
pop it and set `waits[j] = i - j`. Then push `i`. Days left on the stack at the
end never see a higher level and keep the default `0`.

Each index is pushed once and popped at most once, so the scan is linear.

```python
from typing import List


def days_until_higher(levels: List[int]) -> List[int]:
    waits = [0] * len(levels)
    stack: List[int] = []  # indices of days still waiting
    for i, level in enumerate(levels):
        while stack and levels[stack[-1]] < level:
            j = stack.pop()
            waits[j] = i - j
        stack.append(i)
    return waits


if __name__ == "__main__":
    cases = [
        ([3, 1, 4, 1, 5], [2, 1, 2, 1, 0]),
        ([5, 5, 5], [0, 0, 0]),
        ([9, 7, 5, 6], [0, 0, 1, 0]),
        ([1], [0]),
        ([1, 2, 3, 4], [1, 1, 1, 0]),
        ([4, 3, 2, 1], [0, 0, 0, 0]),
        ([0, 0, 1000000000, 0, 1000000000], [2, 1, 0, 1, 0]),
    ]
    for levels, expected in cases:
        print("PASS" if days_until_higher(levels) == expected else "FAIL", levels)
```

## Complexity

- Time: `O(n)` — each index is pushed and popped at most once.
- Space: `O(n)` for the stack (and the output array).
