# Crate Chain Reaction — Reference Solution

## Approach

Scan the belt once, keeping a stack of `(label, run_length)` pairs that
represents the crates still on the belt, with adjacent equal labels grouped
into one run.

- If the incoming crate matches the top run's label, increment that run. When
  the run reaches `k`, pop it: the whole group vanishes, and the new top (if
  any) is now adjacent to whatever comes next, which handles chain reactions
  automatically.
- Otherwise push a new run `(label, 1)`.

Because a run is never left at `k`, and the stack's neighbouring runs always
have different labels, no rescanning is ever needed. At the end, expand each
run back into individual crates.

**Time:** O(n) — each crate is pushed/counted once.
**Space:** O(n) for the stack and output.

## Python

```python
from typing import List


def crate_chain_reaction(crates: List[int], k: int) -> List[int]:
    stack = []  # [label, run_length] pairs
    for x in crates:
        if stack and stack[-1][0] == x:
            stack[-1][1] += 1
            if stack[-1][1] == k:
                stack.pop()
        else:
            stack.append([x, 1])
    out = []
    for label, cnt in stack:
        out.extend([label] * cnt)
    return out
```

Verified against the examples, the extra edge cases, and a randomized
comparison with a brute-force "remove the first k-group and repeat" simulation.
