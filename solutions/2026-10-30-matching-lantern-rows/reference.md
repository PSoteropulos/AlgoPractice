# Matching Lantern Rows — Reference Solution

## Approach

Keep a monotonic stack of `[height, count]` pairs with heights strictly
decreasing from bottom to top. `count` is how many lanterns of that height are
currently "visible" from the right, i.e. have no taller lantern after them so
far (and nothing taller between them).

For each new height `h`:

- Pop every entry with height `< h`; those lanterns can never be the end of a
  valid segment with anything at or beyond `h`.
- If the top now has height `== h`, every earlier lantern counted there pairs
  with the new one (nothing taller lies between), so add `count` to the answer
  and increment it. Otherwise push `[h, 1]`.
- Either way, the new lantern pairs with itself: the answer grows by `count`
  after the increment (which includes the single-lantern segment).

Concretely: after updating the top's count to `c`, add `c` to the answer
(`c - 1` partners plus itself).

## Python

```python
def count_lantern_rows(heights):
    stack = []  # [height, count], heights strictly decreasing
    ans = 0
    for h in heights:
        while stack and stack[-1][0] < h:
            stack.pop()
        if stack and stack[-1][0] == h:
            stack[-1][1] += 1
        else:
            stack.append([h, 1])
        ans += stack[-1][1]
    return ans


if __name__ == "__main__":
    def brute(a):
        n, t = len(a), 0
        for l in range(n):
            for r in range(l, n):
                if a[l] == a[r] and max(a[l:r + 1]) == a[l]:
                    t += 1
        return t

    cases = [([3, 1, 3], 4), ([1, 4, 3, 3, 2], 6), ([5, 1, 6, 5], 4),
             ([2, 2, 2], 6), ([7], 1), ([4, 4, 1, 4, 4], 11),
             ([1] * 100000, 5000050000)]
    for a, e in cases:
        g = count_lantern_rows(a)
        print("PASS" if g == e else "FAIL", len(a), e, g)
    import random
    for _ in range(2000):
        a = [random.randint(1, 4) for _ in range(random.randint(1, 12))]
        assert count_lantern_rows(a) == brute(a), a
    print("random OK")
```

## Complexity

- Time: O(n) — each lantern is pushed and popped at most once.
- Space: O(n) for the stack (O(k) for k distinct heights on it).
