# Even Shift Split

**Difficulty:** Hard
**Topic:** Binary Search

## Description

A small warehouse logs how many packages arrive during each hour of a single
business day, given as an integer array `hourly` of length `n`
(`hourly[i]` is the number of packages that arrive during hour `i`, in
chronological order).

Management wants to split the day into exactly `shifts` contiguous,
non-empty blocks of consecutive hours — the blocks must cover the entire
day in order, so hours cannot be reordered, skipped, or split between
blocks. One worker is assigned to each block, and a worker's **load** is
the total number of packages that arrive during their block's hours.

Management wants to choose the `shifts - 1` block boundaries so that the
busiest worker has as light a load as possible.

Return the minimum possible value of the **maximum load carried by any
single worker**, over all ways to split `hourly` into exactly `shifts`
contiguous, non-empty blocks.

## Examples

### Example 1

```
Input: hourly = [10, 20, 30, 40], shifts = 2
Output: 60
```
Explanation: The three possible ways to split into 2 contiguous blocks are
`[10] | [20,30,40]` (loads 10, 90 → max 90), `[10,20] | [30,40]` (loads 30,
70 → max 70), and `[10,20,30] | [40]` (loads 60, 40 → max 60). The smallest
achievable maximum load is `60`.

### Example 2

```
Input: hourly = [5, 5, 5, 5, 5, 5], shifts = 3
Output: 10
```
Explanation: Splitting into three equal blocks `[5,5] | [5,5] | [5,5]` gives
every worker a load of exactly `10`. Since the total is `30` and there are
`3` workers, no split can do better than `10` per worker on average, so this
is optimal.

### Example 3

```
Input: hourly = [3, 1, 4], shifts = 1
Output: 8
```
Explanation: With only one shift, that single worker takes the entire day:
`3 + 1 + 4 = 8`.

## Constraints

- `1 <= hourly.length <= 10^5`
- `1 <= shifts <= hourly.length`
- `0 <= hourly[i] <= 10^4`

## Follow-up

Can you also reconstruct one valid set of block boundaries that achieves the
optimal maximum load, without increasing the overall time complexity of your
solution?
