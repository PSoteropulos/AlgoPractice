# Beacon Array Maximum Signal

**Difficulty:** Hard
**Topic:** Bit Manipulation

## Description

A relay station operates `n` beacons in a row, numbered `0` to `n - 1`. Each
beacon `i` continuously broadcasts a fixed non-negative integer signal code
`beacons[i]`.

You may **activate** any non-empty subset of the beacons at the same time.
When multiple beacons are activated together, the station measures their
**combined signal**, which is the bitwise XOR of the signal codes of every
activated beacon (activating a single beacon just measures its own code).

Given the integer array `beacons`, return the **maximum combined signal**
achievable by activating any non-empty subset of the beacons.

## Examples

### Example 1

```
beacons = [3, 10, 5, 25, 2, 8]
Output: 31
```

**Explanation:** Activating the beacons with codes `3`, `5`, and `25` gives
a combined signal of `3 XOR 5 XOR 25 = 31`. No other non-empty subset of
`beacons` produces a larger XOR value.

### Example 2

```
beacons = [6, 6, 6]
Output: 6
```

**Explanation:** Activating exactly one beacon gives `6`. Activating any two
beacons gives `6 XOR 6 = 0` (they cancel out). Activating all three gives
`6 XOR 6 XOR 6 = 6`. The best achievable combined signal is `6`.

### Example 3

```
beacons = [42]
Output: 42
```

**Explanation:** There is only one beacon, so the only non-empty subset is
`{42}` itself, giving a combined signal of `42`.

## Constraints

- `1 <= beacons.length <= 2 * 10^5`
- `0 <= beacons[i] < 2^31`

## Follow-up

Beyond the maximum, how many **distinct** combined signal values are
achievable in total across every non-empty subset (counting each distinct
value once, no matter how many subsets produce it)? Can this count be
derived from the same structure you build to find the maximum, without
enumerating subsets?
