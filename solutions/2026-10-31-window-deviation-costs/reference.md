# Window Deviation Costs — Reference Solution

## Approach

The sum of absolute deviations is minimized by choosing `t` equal to a median
of the window. If the window is split into a lower half (the `ceil(k/2)`
smallest values) and an upper half (the rest), with `m` = largest value of the
lower half, then

```
cost = (sum(upper) - |upper| * m) + (|lower| * m - sum(lower))
```

Maintain the two halves with two heaps (a max-heap `lo` and a min-heap `hi`),
along with the running sum of each half and their logical sizes. Sliding the
window means inserting one value and removing one:

- **Insert** `x`: push to `lo` if `x <= top(lo)`, otherwise to `hi`.
- **Remove** `y`: heaps can't delete arbitrary items, so mark its index as
  removed (lazy deletion; entries are `(value, index)` so duplicates are
  unambiguous) and adjust the owning half's size and sum.
  Stale tops are popped whenever they surface.
- **Rebalance** so that `|lo| - |hi|` is 0 or 1, moving a top element across.

Each element enters and leaves a heap at most once, so the work is `O(n log n)`
amortized (heap size can reach `n` because of stale entries, but `log n`
and `log k` are the same order for our purposes).

## Python

```python
import heapq
from typing import List


def window_deviation_costs(nums: List[int], k: int) -> List[int]:
    # Heap entries are (value, index) so each physical entry is unique and can
    # be lazily deleted by index. lo is a max-heap (stored as (-value, index)).
    lo, hi = [], []
    removed = set()          # indices logically deleted but still in a heap
    where = {}               # index -> 0 if in lo, 1 if in hi
    sizes = [0, 0]           # logical sizes of lo, hi
    sums = [0, 0]

    def prune_lo():
        while lo and lo[0][1] in removed:
            removed.discard(heapq.heappop(lo)[1])

    def prune_hi():
        while hi and hi[0][1] in removed:
            removed.discard(heapq.heappop(hi)[1])

    def push_lo(v, i):
        heapq.heappush(lo, (-v, i)); where[i] = 0
        sizes[0] += 1; sums[0] += v

    def push_hi(v, i):
        heapq.heappush(hi, (v, i)); where[i] = 1
        sizes[1] += 1; sums[1] += v

    def rebalance():
        if sizes[0] > sizes[1] + 1:
            prune_lo()
            nv, i = heapq.heappop(lo)
            sizes[0] -= 1; sums[0] += nv       # nv == -v
            push_hi(-nv, i)
        elif sizes[0] < sizes[1]:
            prune_hi()
            v, i = heapq.heappop(hi)
            sizes[1] -= 1; sums[1] -= v
            push_lo(v, i)
        prune_lo()
        prune_hi()

    def add(v, i):
        prune_lo()
        if not lo or v <= -lo[0][0]:
            push_lo(v, i)
        else:
            push_hi(v, i)
        rebalance()

    def remove(v, i):
        removed.add(i)
        side = where.pop(i)
        sizes[side] -= 1; sums[side] -= v
        rebalance()

    def cost():
        m = -lo[0][0]
        return (sums[1] - sizes[1] * m) + (sizes[0] * m - sums[0])

    for i in range(k):
        add(nums[i], i)
    out = [cost()]
    for i in range(k, len(nums)):
        add(nums[i], i)
        remove(nums[i - k], i - k)
        out.append(cost())
    return out


if __name__ == "__main__":
    tests = [
        (([1, 3, 2, 6, 4], 3), [2, 4, 4]),
        (([5, 5, 5, 5], 2), [0, 0, 0]),
        (([1, 10, 4, 7], 4), [12]),
        (([9], 1), [0]),
        (([-3, 8, -1, 2, 2, 9], 2), [11, 9, 3, 0, 7]),
        (([-5, -1, -9, 4], 3), [8, 13]),
    ]
    for (nums, k), expected in tests:
        got = window_deviation_costs(nums, k)
        print("PASS" if got == expected else "FAIL", nums, k, got)

    import random
    for _ in range(300):
        n = random.randint(1, 30)
        k = random.randint(1, n)
        a = [random.randint(-6, 6) for _ in range(n)]
        brute = []
        for i in range(n - k + 1):
            w = sorted(a[i:i + k])
            m = w[(k - 1) // 2]
            brute.append(sum(abs(x - m) for x in w))
        assert window_deviation_costs(a, k) == brute, (a, k)
    print("PASS random vs brute force")
```

## Complexity

- **Time:** `O(n log n)` (each element is pushed and popped at most once per
  heap, including lazy removals; `O(n log k)` with a sorted-container variant).
- **Space:** `O(n)` worst case for heaps plus the delayed-removal map.
