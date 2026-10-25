# Even-Sum Cargo Flip — Reference Solution

## Approach

Process the list batch by batch with a dummy node in front:

1. Keep `prev`, the node just before the current batch (initially the dummy).
2. From `prev`, walk forward `k` nodes to confirm a complete batch exists
   (`tail` is the batch's last node). If fewer than `k` nodes remain, stop.
3. While walking, add up the weights.
4. If the sum is odd, set `prev = tail` and move on.
5. If even, reverse the `k` nodes in place (standard pointer reversal, with
   the first reversed link attached to the node after the batch), connect
   `prev.next` to the new batch head, and set `prev` to the old batch head
   (now the batch's last node).

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reverse_even_sum_groups(head, k):
    dummy = ListNode(0, head)
    prev = dummy
    while True:
        tail = prev
        total = 0
        for _ in range(k):
            tail = tail.next
            if tail is None:
                return dummy.next
            total += tail.val
        first = prev.next
        after = tail.next
        if total % 2 == 1:
            prev = tail
            continue
        cur, rev = first, after
        for _ in range(k):
            nxt = cur.next
            cur.next = rev
            rev = cur
            cur = nxt
        prev.next = rev
        prev = first
```

## Why this is correct

- Each batch is examined once for the sum and at most once for reversal, so
  every node is visited O(1) times.
- Seeding `rev` with `after` means the reversed batch's last node already
  points at the rest of the list; `prev.next = rev` then splices it in.
- After a flip, the old first node is the batch's tail, so it is the correct
  `prev` for the next batch; after a keep, `tail` is.
- A partial final batch is detected when the walk hits `None`, and the list
  is returned unmodified from that point.

## Complexity

- **Time:** O(n)
- **Space:** O(1) — only a handful of pointers.
