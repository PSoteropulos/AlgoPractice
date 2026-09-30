# Odd-Sum Batch Flip — Reference Solution

## Approach

Process the list one batch at a time with a dummy head and a pointer `prev`
that sits just before the current batch.

1. Walk `k` nodes ahead of `prev`, adding up their values. If the list ends
   before `k` nodes were seen, this is the short final batch: stop, leave it
   alone.
2. If the sum is even, skip past the batch by moving `prev` forward `k` nodes.
3. If the sum is odd, reverse exactly those `k` nodes in place. Start the
   reversal with `rev` set to the node *after* the batch, so the reversed
   batch is already linked to the rest of the list. Then set `prev.next` to
   the new batch head, and move `prev` to the old first node (now the batch
   tail).

Each node is visited at most twice (once to sum, once to reverse or skip).

```python
from typing import Optional


class ListNode:
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None):
        self.val = val
        self.next = next


def flip_odd_batches(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    dummy = ListNode(0, head)
    prev = dummy
    while True:
        node, total, count = prev.next, 0, 0
        while node is not None and count < k:
            total += node.val
            node = node.next
            count += 1
        if count < k:
            break                      # short final batch: untouched
        first = prev.next
        if total % 2 == 1:
            cur, rev = first, node     # node = first node after the batch
            for _ in range(k):
                nxt = cur.next
                cur.next = rev
                rev = cur
                cur = nxt
            prev.next = rev            # new batch head
            prev = first               # old head is now the batch tail
        else:
            for _ in range(k):
                prev = prev.next
    return dummy.next
```

## Complexity

- **Time:** `O(n)`. Every node is touched a constant number of times.
- **Space:** `O(1)`. Only a handful of pointers; nodes are re-linked in place.
