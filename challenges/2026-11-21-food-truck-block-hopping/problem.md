# Food Truck Block Hopping

**Difficulty:** Medium
**Topic:** Dynamic Programming (Row-to-Row DP with Distance Penalty)

## Description

You run a food truck on a long, straight street with `m` legal parking spots,
numbered `0` to `m - 1` from west to east. Spot `j` and spot `k` are
`|j - k|` blocks apart.

You have a forecast for the next `n` days: `earnings[d][j]` is the profit you
will make if you park at spot `j` for the whole of day `d`. A value may be
negative (for example, a spot where the permit fee outweighs the sales). You
**must** operate on every day, parked at exactly one spot.

On day `0` you may start at any spot for free. Each night between day `d - 1`
and day `d` you may drive from your current spot to any spot (or stay put);
driving costs `moveCost` per block travelled.

Return the **maximum** total profit you can achieve over all `n` days, i.e.
the sum of the earnings at the spot used each day minus the total driving
cost.

## Examples

**Example 1**

```
Input:  earnings = [[3,1,4],
                    [1,5,1],
                    [2,1,6]], moveCost = 1
Output: 13
```
Explanation: Park at spot 2 (earn 4), drive 1 block to spot 1 (earn 5), then
drive 1 block back to spot 2 (earn 6). Total = 4 + 5 + 6 - 1 - 1 = 13.
Staying at spot 2 all three days gives only 4 + 1 + 6 = 11.

**Example 2**

```
Input:  earnings = [[10,0,0,0,9],
                    [0,0,0,0,9],
                    [10,0,0,0,0]], moveCost = 3
Output: 20
```
Explanation: Staying at spot 0 every day earns 10 + 0 + 10 = 20. Chasing
each day's best spot (0 -> 4 -> 0) earns 10 + 9 + 10 = 29 but costs
3 * (4 + 4) = 24 in driving, for only 5. Staying at spot 4 every day gives 18.

**Example 3**

```
Input:  earnings = [[-5],
                    [-2],
                    [7]], moveCost = 4
Output: 0
```
Explanation: There is only one spot, so you never drive. You still have to
operate every day: -5 + (-2) + 7 = 0.

## Constraints

- `n == earnings.length`, `m == earnings[d].length` for every `d`
- `1 <= n, m`
- `n * m <= 10^5`
- `-10^5 <= earnings[d][j] <= 10^5`
- `0 <= moveCost <= 10^5`
- The answer may exceed the range of a 32-bit integer; use 64-bit arithmetic.

## Follow-up

The direct transition — for every spot today, try every spot yesterday — costs
`O(n * m^2)`, which is far too slow when `n = 2` and `m = 50,000`. Can you
compute each day's best values in `O(m)` so the whole solution runs in
`O(n * m)` time and `O(m)` extra space?
