# Capped Team Merges

**Difficulty:** Easy
**Topic:** Union-Find

## Description

A company has `n` employees, numbered `0` to `n - 1`. Each employee starts
on their own individual team. You are also given an integer `maxSize`: no
team is ever allowed to grow beyond `maxSize` employees.

You are given a list `requests`, where `requests[i] = [a, b]` means "try to
merge the team containing employee `a` with the team containing employee
`b`". Process the requests **in order**. For each request:

- If `a` and `b` are already on the same team, the request has no effect.
- Otherwise, if merging the two teams would produce a team with more than
  `maxSize` employees, the request is **skipped** (rejected) and has no
  effect.
- Otherwise, the two teams merge into one.

After processing every request, return an array `result` of length `n`
where `result[i]` is the size of the final team that employee `i` belongs
to.

## Examples

**Example 1**

```
Input:  n = 5, maxSize = 3, requests = [[0,1],[2,3],[1,2],[3,4]]
Output: [2,2,3,3,3]
Explanation:
[0,1]: teams {0} and {1}, combined size 2 <= 3 -> merge into {0,1}.
[2,3]: teams {2} and {3}, combined size 2 <= 3 -> merge into {2,3}.
[1,2]: teams {0,1} (size 2) and {2,3} (size 2), combined size 4 > 3
       -> rejected, no change.
[3,4]: teams {2,3} (size 2) and {4} (size 1), combined size 3 <= 3
       -> merge into {2,3,4}.
Final teams: {0,1} (size 2) and {2,3,4} (size 3), giving
result = [2,2,3,3,3].
```

**Example 2**

```
Input:  n = 4, maxSize = 2, requests = [[0,1],[1,2],[2,3]]
Output: [2,2,2,2]
Explanation:
[0,1]: combined size 2 <= 2 -> merge into {0,1}.
[1,2]: team {0,1} (size 2) and team {2} (size 1), combined size 3 > 2
       -> rejected.
[2,3]: team {2} (size 1) and team {3} (size 1), combined size 2 <= 2
       -> merge into {2,3}.
Final teams: {0,1} and {2,3}, both size 2, giving result = [2,2,2,2].
```

**Example 3**

```
Input:  n = 3, maxSize = 1, requests = [[0,1],[1,2]]
Output: [1,1,1]
Explanation: With maxSize = 1, no two single-employee teams can ever merge
(any merge would produce a team of size at least 2), so every request is
rejected and every employee remains alone.
```

## Constraints

- `1 <= n <= 10^5`
- `1 <= maxSize <= n`
- `0 <= requests.length <= 10^5`
- `requests[i].length == 2`
- `0 <= requests[i][0], requests[i][1] < n`
- `requests[i][0] != requests[i][1]`

## Follow-up

Can you answer, after each individual request is processed, "how many
requests so far have been rejected due to the size cap" without
recomputing from scratch? What is the amortized time per request for your
approach?
