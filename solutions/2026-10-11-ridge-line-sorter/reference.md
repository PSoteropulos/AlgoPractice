# Ridge Line Sorter — Reference Solution

## Approach

A ridge-shaped list is a non-decreasing run followed by a non-increasing run.

1. Walk from the head while `cur.val <= cur.next.val`; `cur` stops at the last
   node of the climbing run. (Cutting right after the first strict descent is
   always valid: whatever follows it must be non-increasing.)
2. Cut the list there, and reverse the remainder in place. It is now
   non-decreasing.
3. Merge the two sorted lists by relinking nodes behind a dummy head.

Every node is visited a constant number of times and only pointers change.

## Complexity

- Time: O(n)
- Space: O(1) extra

## Code (Python)

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def ridge_line_sorter(head):
    cur = head
    while cur and cur.next and cur.val <= cur.next.val:
        cur = cur.next
    first, rest = head, None
    if cur:
        rest = cur.next
        cur.next = None
    rev = None
    while rest:
        nxt = rest.next
        rest.next = rev
        rev = rest
        rest = nxt
    dummy = tail = ListNode(0)
    a, b = first, rev
    while a and b:
        if a.val <= b.val:
            tail.next, a = a, a.next
        else:
            tail.next, b = b, b.next
        tail = tail.next
    tail.next = a or b
    return dummy.next
```

Verified against all example and edge cases in `challenges/2026-10-11-ridge-line-sorter/`.
