# Pendulum Playlist Reorder — Reference Solution

## Approach

The obvious approach copies the nodes into a deque and pops `k` from the
front, `k` from the back, and so on, re-linking as it goes. That is `O(n)`
time but `O(n)` extra space. We can do it in `O(1)` extra space with three
classic linked-list moves.

**Key observation:** the front blocks always consume a *prefix* of the
original list and the back blocks always consume the remaining *suffix*
(read from the tail inward). So if we know how many nodes end up in front
blocks in total — call it `F` — the problem decomposes cleanly:

1. **Count & plan.** Walk the list once to get `n`. Then replay the block
   sizes without touching any nodes: starting with `remaining = n` and a
   front turn, each turn takes `min(k, remaining)`; add it to `F` on front
   turns. This is `O(n / k + 1)` iterations.
2. **Split.** Cut the list after its first `F` nodes. Call the prefix `A`
   and the suffix `B`. (`F >= 1` always, since the first turn is a front
   turn and `n >= 1`.)
3. **Reverse `B`.** Now `B` lists the back-block nodes in exactly the order
   they will be taken (last original node first).
4. **Interleave in blocks of `k`.** Repeatedly append up to `k` nodes from
   `A`, then up to `k` nodes from `B`, until both are empty. Because `F` was
   computed by replaying the same turn sequence, each list runs out at
   exactly the right moment: a short final block can only be the last block
   overall, so the "up to `k`" logic never mis-assigns a node.

Remember to terminate the result with `tail.next = None` — the last node
placed might otherwise still point into the old structure and create a
cycle.

## Python

```python
def pendulum_reorder(head, k):
    # 1. Count nodes.
    n = 0
    node = head
    while node:
        n += 1
        node = node.next

    # Replay the turn sizes to learn how many nodes go into front blocks.
    front_total, remaining, front_turn = 0, n, True
    while remaining > 0:
        take = min(k, remaining)
        if front_turn:
            front_total += take
        remaining -= take
        front_turn = not front_turn

    # 2. Split after front_total nodes.
    tail_a = head
    for _ in range(front_total - 1):
        tail_a = tail_a.next
    b = tail_a.next
    tail_a.next = None

    # 3. Reverse the back part.
    prev = None
    while b:
        b.next, prev, b = prev, b, b.next
    a, b = head, prev

    # 4. Interleave blocks of k: front block, back block, ...
    dummy = ListNode()
    tail = dummy
    while a or b:
        for _ in range(k):
            if not a:
                break
            tail.next, tail, a = a, a, a.next
        for _ in range(k):
            if not b:
                break
            tail.next, tail, b = b, b, b.next
    tail.next = None
    return dummy.next
```

(Careful with the tuple assignment in the reversal: Python evaluates the
whole right-hand side first, then assigns left to right, so `b.next` is set
on the *old* `b` before `b` is advanced.)

## Complexity

- **Time:** `O(n)` — one counting pass, an `O(n / k + 1)` planning loop, one
  pass to find the split point, one reversal pass, and one interleaving pass
  that moves each node exactly once.
- **Space:** `O(1)` extra — only a handful of pointers and counters; nodes
  are re-linked in place.

## Verification

Checked against all six self-check cases in `solution.py` (the three
examples plus single-node, `n = 8, k = 3`, and duplicates/negatives), and
against a deque-based brute force on 20,000 random lists (`1 <= n <= 30`,
`1 <= k <= 35`) plus `n = 50,000` with `k = 1, 7, 100000`.
