# Capped Team Merges — Reference Solution

## Approach

This is a straightforward **Union-Find (Disjoint Set Union)** problem with
one extra check before every union: the combined size must not exceed
`maxSize`.

1. Initialize `parent[i] = i` and `size[i] = 1` for every employee `i` — n
   singleton teams.
2. Implement `find(x)` with **path compression**: walk up to the root,
   pointing each visited node directly at its grandparent along the way
   (path halving), so repeated finds on the same chain flatten it quickly.
3. For each request `[a, b]`:
   - Compute `ra = find(a)` and `rb = find(b)`.
   - If `ra == rb`, they're already on the same team — skip.
   - If `size[ra] + size[rb] > maxSize`, merging would violate the cap —
     skip.
   - Otherwise, merge using **union by size**: attach the smaller team's
     root under the larger team's root, and add the smaller team's size
     into the larger root's size. This keeps trees shallow.
4. After all requests are processed, for every employee `i`, the final
   team size is `size[find(i)]` (the size stored at `i`'s current root).

```python
def capped_team_merges(n, max_size, requests):
    parent = list(range(n))
    size = [1] * n

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for a, b in requests:
        ra, rb = find(a), find(b)
        if ra == rb:
            continue
        if size[ra] + size[rb] > max_size:
            continue
        if size[ra] < size[rb]:
            ra, rb = rb, ra
        parent[rb] = ra
        size[ra] += size[rb]

    return [size[find(i)] for i in range(n)]
```

## Why this is correct

- `find` always returns the current representative (root) of the team an
  employee belongs to, regardless of path compression — compression only
  changes *how fast* we reach the root, never *which* root is reachable,
  since it only repoints nodes to an ancestor that still leads to the
  same root.
- The cap check happens **before** any parent pointers are changed, using
  the `size` values of the two current roots, so it always evaluates the
  true combined size the merge would produce — a team's size is only ever
  correct at its root, which is exactly what we read.
- Union by size guarantees the size stored at a root is always the true
  count of employees in that tree, since every merge adds the absorbed
  root's size into the surviving root's size exactly once.
- Because a rejected request changes nothing, later requests see the
  same state they would have without it — rejections are true no-ops.

## Complexity

- **Time:** O((n + q) · α(n)), where `q = requests.length` and `α` is the
  inverse Ackermann function (effectively a small constant ≤ 4 for any
  realistic `n`). Initialization is O(n); each request performs O(α(n))
  amortized work thanks to path compression combined with union by size.
- **Space:** O(n) for the `parent` and `size` arrays.
