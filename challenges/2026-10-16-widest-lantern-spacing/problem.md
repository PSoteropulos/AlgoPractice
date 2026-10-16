# Widest Lantern Spacing

**Difficulty:** Medium
**Topic:** Binary Search

## Description

A festival path has `n` lantern posts. You are given an integer array
`posts`, where `posts[i]` is the position (in metres from the entrance) of the
`i`-th post. The posts are listed in **no particular order**, and several posts
may share the same position.

You have exactly `k` lanterns and must hang each one on a **different** post.
The *spacing* of a placement is the smallest distance between any two hung
lanterns (the minimum of `|posts[a] - posts[b]|` over all pairs of chosen
posts).

Return the **largest spacing** you can achieve.

## Examples

### Example 1

**Input:** `posts = [1,2,8,4,9]`, `k = 3`

**Output:** `3`

**Explanation:** Sorted, the positions are `1, 2, 4, 8, 9`. Hanging lanterns at
`1, 4, 8` gives gaps `3` and `4`, so the spacing is `3`. Spacing `4` is
impossible: starting at `1`, the next lantern must be at `>= 5` (so `8`), and
the third must be at `>= 12`, which does not exist.

### Example 2

**Input:** `posts = [5,5,5,5]`, `k = 2`

**Output:** `0`

**Explanation:** Every post is at the same position, so any two lanterns are
`0` metres apart.

### Example 3

**Input:** `posts = [10,1,6]`, `k = 2`

**Output:** `9`

**Explanation:** Use the posts at `1` and `10`.

## Constraints

- `2 <= k <= n <= 10^5`
- `n == posts.length`
- `0 <= posts[i] <= 10^9`

## Follow-up

Can you do it in `O(n log n + n log M)` time, where `M` is the largest
position? Why is "can we reach spacing `d`?" monotonic in `d`, and what greedy
rule answers it in a single pass over the sorted posts?
