# Quiet Channel Pairs

**Difficulty:** Easy
**Topic:** Bit Manipulation

## Description

A radio station broadcasts on up to 20 channels, numbered `0` to `19`. Each
transmitter is described by an integer in `masks`, where bit `k` of
`masks[i]` is `1` if transmitter `i` uses channel `k`, and `0` otherwise.

Two transmitters **interfere** if they use at least one channel in common.
Two transmitters are **quiet** together if they share no channel at all.

Return the number of index pairs `(i, j)` with `i < j` such that transmitters
`i` and `j` are quiet together. A transmitter with mask `0` uses no channels,
so it is quiet with every other transmitter.

## Examples

### Example 1

**Input:** `masks = [1,2,3]`

**Output:** `1`

**Explanation:** In binary the masks are `01`, `10`, `11`. Only the pair of
`01` and `10` shares no channel. Both pairs involving `11` overlap with it.

### Example 2

**Input:** `masks = [6,9,5,10]`

**Output:** `2`

**Explanation:** The binary masks are `0110`, `1001`, `0101`, `1010`.
Pairs `(0,1)` (`0110` and `1001`) and `(2,3)` (`0101` and `1010`) share no
channel. The other four pairs each share a channel.

### Example 3

**Input:** `masks = [0,0,5]`

**Output:** `3`

**Explanation:** Every transmitter here is quiet with every other one, since
the zero masks use no channels. All 3 pairs count.

## Constraints

- `1 <= masks.length <= 2000`
- `0 <= masks[i] < 2^20`

## Follow-up

Suppose `masks.length` grows to `10^5` and every `masks[i] < 2^16`. How could
you count the pairs without comparing every pair? (Hint: think about subsets
of the complement of a mask.)
