# Kth Highest Score Live Feed

**Difficulty:** Medium
**Topic:** Heaps (priority queues)

## Description

A live esports leaderboard receives player scores one at a time, in the
order they are submitted. After each score is recorded, the broadcast
overlay needs to display the **k-th highest score** among all scores
recorded so far. Ties do **not** get merged — if the same value has been
submitted multiple times, each submission occupies its own rank in the
"highest to lowest" ordering. If fewer than `k` scores have been recorded
yet, the overlay shows `-1` instead.

Given an integer `k` and a list `scores` of `n` integers representing the
scores in arrival order, return an array `result` of length `n` where
`result[i]` is the k-th highest score among `scores[0..i]` (inclusive), or
`-1` if fewer than `k` scores have arrived yet (i.e. `i + 1 < k`).

## Examples

**Example 1**

```
Input:  k = 2, scores = [3, 5, 10, 1, 7]
Output: [-1, 3, 5, 5, 7]
```

Explanation: After `[3]` only one score has arrived, so the overlay shows
`-1`. After `[3, 5]` the 2nd highest is `3`. After `[3, 5, 10]` the scores
sorted highest-to-lowest are `[10, 5, 3]`, so the 2nd highest is `5`. After
`[3, 5, 10, 1]` it is still `5` (sorted: `[10, 5, 3, 1]`). After
`[3, 5, 10, 1, 7]` it is `7` (sorted: `[10, 7, 5, 3, 1]`).

**Example 2**

```
Input:  k = 1, scores = [4, 4, 4]
Output: [4, 4, 4]
```

Explanation: With `k = 1` the answer is just the highest score seen so
far. Duplicate values are allowed and each submission counts separately,
but the highest value after every step here is still `4`.

**Example 3**

```
Input:  k = 3, scores = [9, 1]
Output: [-1, -1]
```

Explanation: Only 2 scores ever arrive, which is always fewer than
`k = 3`, so every position shows `-1`.

## Constraints

- `1 <= k <= scores.length <= 10^5`
- `-10^9 <= scores[i] <= 10^9`
- Scores may repeat.

## Follow-up

Suppose players can also be **disqualified**, removing one specific past
score from consideration at an arbitrary later point (not necessarily the
most recent one). Sketch how you would adapt a heap-based approach to
support arbitrary-value removals in `O(log n)` amortized time each, and
explain why a plain heap alone (without an extra structure) cannot do this
efficiently.
