# Dial Lock Alignment

**Difficulty:** Medium
**Topic:** Arrays / Strings (String Rotation / Pattern Matching)

## Description

A bike-share dock uses a circular letter dial as its lock. Reading the dial
clockwise from its marker gives a lowercase string `ring`. The lock opens when
the dial reads exactly `target` (same length as `ring`).

The dial can only be turned one notch at a time, and each notch counts as one
**move**:

- A **left turn** moves the first letter to the end:
  `"abcd"` becomes `"bcda"`.
- A **right turn** moves the last letter to the front:
  `"abcd"` becomes `"dabc"`.

You may mix left and right turns freely. Return the **minimum** number of
moves needed to make the dial read `target`, or `-1` if no sequence of turns
can ever produce `target`.

Note that the same reading may be reachable at several different dial
positions when `ring` contains repeated patterns; the answer is the cheapest
of them.

## Examples

**Example 1**

```
Input:  ring = "abcde", target = "deabc"
Output: 2
```
Explanation: Three left turns give `"bcdea" -> "cdeab" -> "deabc"` (3 moves),
but two right turns give `"eabcd" -> "deabc"` (2 moves), which is cheaper.

**Example 2**

```
Input:  ring = "abcabcabc", target = "cabcabcab"
Output: 1
```
Explanation: The dial reads `target` after 2, 5, or 8 left turns. Turning
left 8 times is the same position as turning right 9 - 8 = 1 time, so a
single right turn (`"abcabcabc" -> "cabcabcab"`) suffices.

**Example 3**

```
Input:  ring = "abc", target = "acb"
Output: -1
```
Explanation: The only readings the dial can ever show are `"abc"`, `"bca"`,
and `"cab"`. Turning never changes the cyclic order of letters, so `"acb"` is
unreachable even though it uses the same letters.

## Constraints

- `1 <= ring.length <= 10^5`
- `target.length == ring.length`
- `ring` and `target` consist only of lowercase English letters.

## Follow-up

Checking all `n` rotations one by one and comparing each to `target`
character by character is `O(n^2)` in the worst case (think long runs of the
same letter). Can you find **every** rotation that matches in `O(n)` total
time?
