# Ridge Line Sorter

**Difficulty:** Medium
**Topic:** Linked Lists

## Description

A trail survey records the elevation at each checkpoint, and the readings are
stored in a singly linked list in the order the checkpoints were walked.
The trail follows a *ridge shape*: it climbs (never dropping), then descends
(never rising). Formally, the list can be split into a first part whose values
are non-decreasing and a remaining part (possibly empty) whose values are
non-increasing. The first part is never empty unless the whole list is empty.

Given the `head` of such a list, rearrange its **existing nodes** so the
values read in non-decreasing order, and return the new head. Do not create
new nodes and do not overwrite node values; only change `next` pointers.
Nodes with equal values may end up in any relative order.

## Examples

### Example 1

**Input:** `head = [1, 4, 6, 5, 2]`

**Output:** `[1, 2, 4, 5, 6]`

**Explanation:** The climbing part is `[1, 4, 6]` and the descending part is
`[5, 2]`. Reversed, the descent becomes `[2, 5]`, and merging the two sorted
runs gives `[1, 2, 4, 5, 6]`.

### Example 2

**Input:** `head = [3, 3, 7, 7, 7, 1, 1]`

**Output:** `[1, 1, 3, 3, 7, 7, 7]`

**Explanation:** Climb `[3, 3, 7, 7, 7]`, descent `[1, 1]`. Equal values are
fine in both parts.

### Example 3

**Input:** `head = [9, 8, 5]`

**Output:** `[5, 8, 9]`

**Explanation:** The climbing part is just `[9]`; the whole rest is the
descent, which simply needs reversing.

## Constraints

- `0 <= number of nodes <= 5 * 10^4`
- `-10^9 <= Node.val <= 10^9`
- The list is guaranteed to be ridge-shaped as defined above.

## Follow-up

Can you do it in `O(n)` time and `O(1)` extra space (no arrays, no recursion,
no general-purpose sort)?
