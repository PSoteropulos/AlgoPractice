# Heavy Truck Routes

**Difficulty:** Medium
**Topic:** Union-Find (Offline Queries)

## Description

A freight company operates in a region of `n` towns numbered `0` to `n - 1`.
You are given `bridges`, where `bridges[i] = [a, b, cap]` describes a
two-way bridge between towns `a` and `b` that can carry trucks weighing **at
most** `cap` tonnes. Several bridges may connect the same pair of towns.

You are also given `queries`, where `queries[j] = [src, dst, load]` asks:
can a truck weighing exactly `load` tonnes drive from town `src` to town `dst`,
passing only over bridges whose `cap >= load`? The truck may pass through any
number of intermediate towns. A town is always reachable from itself.

Queries are independent of each other. Return a boolean array `answer` of the
same length as `queries`, where `answer[j]` is `true` if the `j`-th truck can
make the trip and `false` otherwise.

## Examples

**Example 1**

```
Input:  n = 5
        bridges = [[0,1,8],[1,2,5],[2,3,9],[3,4,2]]
        queries = [[0,2,5],[0,2,6],[2,4,2],[2,4,3],[3,3,100]]
Output: [true,false,true,false,true]
```
Explanation:
- Query 0: a 5-tonne truck may use bridges with cap 8 and 5, so `0-1-2` works.
- Query 1: at 6 tonnes the cap-5 bridge is unusable; towns 0 and 2 are split.
- Query 2: at 2 tonnes every bridge is usable, so `2-3-4` works.
- Query 3: at 3 tonnes the cap-2 bridge is unusable, so town 4 is cut off.
- Query 4: source equals destination, so it is always reachable.

**Example 2**

```
Input:  n = 4
        bridges = [[0,1,3],[0,1,7],[2,3,4]]
        queries = [[0,1,7],[0,1,8],[1,2,1]]
Output: [true,false,false]
```
Explanation: the parallel cap-7 bridge lets a 7-tonne truck cross from 0 to 1.
No bridge holds 8 tonnes. Towns {0,1} and {2,3} are never connected.

**Example 3**

```
Input:  n = 3, bridges = [], queries = [[0,2,1],[1,1,1]]
Output: [false,true]
```
Explanation: with no bridges only trips from a town to itself succeed.

## Constraints

- `1 <= n <= 100000`
- `0 <= len(bridges) <= 200000`, `0 <= a, b < n`, `a != b`
- `1 <= cap <= 10^9`
- `1 <= len(queries) <= 200000`, `0 <= src, dst < n`
- `1 <= load <= 10^9`

## Follow-up

Answering each query with its own BFS is `O(Q * (n + E))`, far too slow. Can
you answer all queries in `O((E + Q) log(E + Q))` by choosing a clever order to
process bridges and queries? What if queries arrived online, one at a time?
