# Pendulum Playlist Reorder

**Difficulty:** Medium
**Topic:** Linked Lists

## Description

A radio DJ keeps tonight's playlist as a singly linked list of track IDs.
To keep the energy swinging, they want to rebuild the playlist with a
"pendulum" pattern controlled by a block size `k`:

1. Take the next `k` tracks from the **front** of the tracks that have not
   been placed yet, in their original order.
2. Then take the next `k` tracks from the **back** of the tracks that have
   not been placed yet, starting with the very last one and moving toward
   the front (so this block appears in reverse of its original order).
3. Keep alternating front-block, back-block, front-block, ... until every
   track has been placed. If fewer than `k` unplaced tracks remain when a
   block starts, that block simply takes all of them (from the front or the
   back, depending on whose turn it is).

The new playlist is the concatenation of the blocks in the order they were
taken.

Given the `head` of the playlist and the integer `k`, reorder the list
according to the rules above and return the head of the reordered list.
You must re-link the existing nodes (change their `next` pointers) rather
than allocating new nodes. Track IDs are not necessarily distinct — the
rules depend only on node positions, never on their values.

## Examples

### Example 1

**Input:** `head = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7`, `k = 2`

**Output:** `1 -> 2 -> 7 -> 6 -> 3 -> 4 -> 5`

**Explanation:**
- Front block: `1, 2`. Unplaced: `3 4 5 6 7`.
- Back block: `7, 6`. Unplaced: `3 4 5`.
- Front block: `3, 4`. Unplaced: `5`.
- Back block: only one track left, so it takes just `5`.

### Example 2

**Input:** `head = 1 -> 2 -> 3 -> 4 -> 5`, `k = 1`

**Output:** `1 -> 5 -> 2 -> 4 -> 3`

**Explanation:** With `k = 1` the playlist alternates single tracks from
the front and back: `1`, then `5`, then `2`, then `4`, then the last
remaining track `3` (a front turn).

### Example 3

**Input:** `head = 10 -> 20 -> 30`, `k = 5`

**Output:** `10 -> 20 -> 30`

**Explanation:** The very first front block wants 5 tracks but only 3
exist, so it takes all of them in their original order. Nothing is left
for a back block, and the playlist is unchanged.

## Constraints

- The number of nodes `n` satisfies `1 <= n <= 5 * 10^4`.
- `1 <= k <= 10^5` (note that `k` may exceed `n`).
- `-10^5 <= Node.val <= 10^5`
- Nodes must be re-linked in place; do not create new nodes.

## Follow-up

Can you do it in `O(n)` time using only `O(1)` extra space — i.e. without
copying the nodes (or their values) into an array or deque? Hint: before
touching any pointers, work out exactly how many nodes will end up in
front blocks in total.
