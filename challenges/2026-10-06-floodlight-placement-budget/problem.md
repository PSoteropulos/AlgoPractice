# Floodlight Placement Budget

**Difficulty:** Hard
**Topic:** Dynamic Programming

## Description

A night market runs along a straight street. There are `n` stalls, and stall
`i` sits at position `x[i]` and has `w[i]` visitors queuing in front of it. The
array `x` is **strictly increasing**.

You may install floodlights, but a floodlight can only be mounted **on a
stall** (at the position of one of the stalls). Every installed floodlight costs
a fixed setup fee `c`, no matter where it is. You must install **at least one**
floodlight, and you may install as many as you like (at most one per stall).

Once the lights are installed, every stall is lit by its **nearest** floodlight
(a stall with its own light is at distance 0). The *glare cost* of a stall is
`w[i]` multiplied by the distance from `x[i]` to its nearest floodlight.

The total cost is

```
c * (number of floodlights) + sum over all stalls of w[i] * (distance to nearest floodlight)
```

Return the **minimum possible total cost**.

## Examples

### Example 1

**Input:** `x = [1, 2, 6, 7, 8], w = [3, 1, 2, 2, 1], c = 5`

**Output:** `14`

**Explanation:** Install lights at positions `1` and `7`. Setup is `2 * 5 = 10`.
The stalls at `2`, `6` and `8` are each at distance 1 from their nearest light,
adding `1*1 + 2*1 + 1*1 = 4`. Total `14`. A single light costs more
(best is at `6`, total `5 + 3*5 + 1*4 + 2*1 + 1*2 = 28`), and three lights cost at least
`15`.

### Example 2

**Input:** `x = [0, 10, 20], w = [1, 1, 1], c = 100`

**Output:** `120`

**Explanation:** A single light at `10` costs `100` for setup plus
`1*10 + 1*10 = 20` of glare. Extra lights each cost `100`, saving at most `10`.

### Example 3

**Input:** `x = [4], w = [7], c = 3`

**Output:** `3`

**Explanation:** One light on the only stall; its glare is zero.

## Constraints

- `1 <= n <= 400`
- `x.length == w.length == n`
- `0 <= x[0] < x[1] < ... < x[n-1] <= 10^6`
- `1 <= w[i] <= 10^4`
- `0 <= c <= 10^9`

(Watch out: the answer can exceed a 32-bit signed integer.)

## Follow-up

The plain O(n^2) transition table is fine for `n = 400`. Can you speed the DP
up when `n` is 10^5 (hint: the group cost satisfies the quadrangle inequality,
so the optimal split point is monotone — think divide-and-conquer
optimization or the Lagrangian / "aliens" trick, since `c` already acts like a
per-group penalty)?
