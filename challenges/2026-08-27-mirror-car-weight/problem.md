# Mirror Car Weight

**Difficulty:** Easy
**Topic:** Linked Lists

## Description

A freight train is modeled as a singly linked list, where each node stores
the weight (in tons) of one car. The list is ordered from the engine
(`head`) to the caboose (the last node).

For an inspection, engineers pick a car by its position `k` (1-indexed,
counting from the engine) and want to know the weight of its **mirror
car** — the car at the same position counted from the caboose end.
Formally, if the train has `n` cars, the mirror of position `i` is
position `n - i + 1`.

Given the head of the linked list and an integer `k`, return the weight
of the mirror car of position `k`. If `k` is less than `1` or greater
than `n` (there is no car at position `k`), return `-1`.

Your solution should run in **O(n) time and O(1) additional space** — do
not copy the list's values into an array or any other container whose
size scales with `n`.

## Examples

**Example 1**

```
Input:  cars = [10, 20, 30, 40, 50], k = 2
Output: 40
```

Explanation: `n = 5`. The car at position `2` weighs `20`, but the
question asks for its mirror, which sits at position `5 - 2 + 1 = 4`.
The car at position `4` weighs `40`.

**Example 2**

```
Input:  cars = [9], k = 1
Output: 9
```

Explanation: `n = 1`. The mirror of position `1` is
`1 - 1 + 1 = 1` — the same single car mirrors itself. Its weight is `9`.

**Example 3**

```
Input:  cars = [3, 6, 9], k = 5
Output: -1
```

Explanation: `n = 3`, but `k = 5` exceeds `n`, so there is no car at
position `5` and the answer is `-1`.

## Constraints

- `1 <= n <= 10^5` (number of cars in the train)
- `1 <= cars[i] <= 10^4` (car weight, in tons)
- `1 <= k <= 2 * 10^5` (`k` may exceed `n`, to test the out-of-range case)

## Follow-up

Suppose the train also supports a live `couple(weight)` operation that
appends a new car at the caboose end, and mirror-weight queries can be
interleaved with couplings at any time. Sketch a data structure — built
once when the train is assembled and updated incrementally on each
`couple` — that answers a mirror query in `O(1)` time. What is the
amortized cost of `couple`, and what extra space does your structure use
compared to re-walking the raw linked list on every query?
