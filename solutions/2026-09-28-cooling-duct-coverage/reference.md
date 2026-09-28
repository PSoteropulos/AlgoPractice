# Cooling Duct Coverage — Reference Solution

## Approach

This is the classic "largest rectangle in a histogram" pattern, solved with
a **monotonic increasing stack** of indices.

The key insight: for every rack `i`, if we imagine it as the *shortest*
rack in the panel's span, the best possible panel using `heights[i]` as its
height extends as far left and as far right as it can while staying `>=
heights[i]`. So instead of checking every `O(n^2)` range directly, we only
need, for each rack, the nearest strictly-shorter rack to its left and to
its right — those bound the widest range where it remains the minimum.

We scan left to right, maintaining a stack of indices whose heights are
strictly increasing. For each new rack `i` (and a virtual rack of height 0
appended after the last real rack, to flush everything at the end):

- While the stack is non-empty and `heights[stack.top] >= heights[i]`, the
  rack at `stack.top` can never extend further right (rack `i` is its
  right boundary). Pop it, and compute the widest panel where it's the
  minimum:
  - `height = heights[popped]`
  - `width = i - stack.top - 1` (or just `i` if the stack is now empty,
    meaning it extends all the way back to index 0)
  - Update the running best with `height * width`.
- Push `i` onto the stack.

Because each index is pushed once and popped at most once, the whole scan
is `O(n)`.

```python
def max_duct_area(heights):
    stack = []          # indices with strictly increasing heights
    max_area = 0
    n = len(heights)
    for i in range(n + 1):
        h = heights[i] if i < n else 0   # sentinel flushes the stack
        while stack and heights[stack[-1]] >= h:
            top = stack.pop()
            height = heights[top]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area
```

Tracing `heights = [2, 1, 5, 6, 2, 3]`:

- `i=0` (h=2): stack empty → push 0. stack=[0]
- `i=1` (h=1): `heights[0]=2 >= 1` → pop 0, width=1 (stack empty), area=2.
  push 1. stack=[1]
- `i=2` (h=5): `heights[1]=1 < 5` → push 2. stack=[1,2]
- `i=3` (h=6): `heights[2]=5 < 6` → push 3. stack=[1,2,3]
- `i=4` (h=2): `heights[3]=6 >= 2` → pop 3, width=4-2-1=1, area=6.
  `heights[2]=5 >= 2` → pop 2, width=4-1-1=2, area=10 (new max).
  `heights[1]=1 < 2` → push 4. stack=[1,4]
- `i=5` (h=3): `heights[4]=2 < 3` → push 5. stack=[1,4,5]
- `i=6` (h=0, sentinel): pop 5 (width=6-4-1=1, area=3), pop 4
  (width=6-1-1=4, area=8), pop 1 (width=6, area=6). stack empty.

Maximum area found: **10**, matching the expected output.

## Complexity

- **Time:** `O(n)` — each index is pushed and popped from the stack at
  most once.
- **Space:** `O(n)` — for the stack in the worst case (a strictly
  increasing input, where nothing is popped until the sentinel).
