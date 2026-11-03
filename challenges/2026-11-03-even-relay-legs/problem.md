# Even Relay Legs

**Difficulty:** Medium
**Topic:** Binary Search (Binary Search on the Answer)

## Description

A charity relay follows a fixed trail with checkpoints along it. You are given
an array `distances`, where `distances[i]` is the length (in metres) of the
`i`-th stretch of trail between consecutive checkpoints, in the order the trail
is walked.

Exactly `k` runners will take part. The trail must be divided into exactly `k`
**legs**: each leg is a non-empty run of consecutive stretches, every stretch
belongs to exactly one leg, and legs are assigned to runners in trail order.
The length of a leg is the sum of its stretches.

Organisers want the relay to feel fair, so they want the **longest leg to be as
short as possible**. Return that smallest possible value of the longest leg.

## Examples

**Example 1**

```
Input:  distances = [4, 9, 3, 6, 2, 8], k = 3
Output: 13
```
Explanation: split as `[4, 9] | [3, 6, 2] | [8]`, giving leg lengths 13, 11
and 8. The longest is 13. A limit of 12 is impossible: 9 and 3 fit together
(12), but then `[4]`, `[9, 3]`, `[6, 2]`, `[8]` already needs 4 legs, and no
other grouping with limit 12 does better.

**Example 2**

```
Input:  distances = [5, 5, 5, 5], k = 2
Output: 10
```
Explanation: `[5, 5] | [5, 5]` gives two legs of length 10.

**Example 3**

```
Input:  distances = [12, 1, 1], k = 3
Output: 12
```
Explanation: with 3 runners and 3 stretches every stretch is its own leg, so the
longest leg is the longest single stretch, 12.

## Constraints

- `1 <= k <= len(distances) <= 100000`
- `0 <= distances[i] <= 10000`
- The total of all distances fits comfortably in a 32-bit signed integer
  (at most `10^9`).

## Follow-up

Can you solve it in `O(n log S)` time, where `S` is the sum of `distances`?
Think about what makes a candidate "longest leg" value feasible, and why
feasibility is monotonic. (A dynamic-programming solution also exists, but is
`O(k * n^2)` or `O(k * n)` with extra tricks, and is far slower here.)
