# Quiet Channel Pairs — Reference Solution

## Approach

Two transmitters share no channel exactly when the bitwise AND of their masks
is `0`. With at most 2000 masks there are fewer than 2 million pairs, so check
each pair `(i, j)` with `i < j` and count those where `masks[i] & masks[j] == 0`.

For the follow-up (`n` up to `10^5`, masks below `2^16`): build `cnt[m]`, the
number of masks equal to `m`, then run a "sum over subsets" pass so that
`sub[m]` is the number of masks that are subsets of `m`. For each mask `x`, the
masks quiet with it are exactly the subsets of its complement, so add
`sub[~x & full]`. This counts ordered pairs (and `x` with itself when `x == 0`),
so correct for those and halve. Time `O(2^b * b + n)` for `b` bits.

```python
from typing import List


def count_quiet_pairs(masks: List[int]) -> int:
    n = len(masks)
    count = 0
    for i in range(n):
        for j in range(i + 1, n):
            if masks[i] & masks[j] == 0:
                count += 1
    return count
```

## Complexity

- Time: `O(n^2)` pair checks, each `O(1)`.
- Space: `O(1)`.
