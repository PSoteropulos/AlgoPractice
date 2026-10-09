from typing import List


def can_reach_all(n: int, cables: List[List[int]], queries: List[List[int]]) -> List[bool]:
    """Return, for each query [u, v, limit], whether u reaches v using only cables with delay < limit."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', 5, [[0,1,4],[1,2,6],[2,3,2],[3,4,9]], [[0,2,7],[0,2,6],[0,4,10],[2,3,3],[3,3,1]], [True,False,True,True,True]),
        ('example 2', 4, [[0,1,5],[0,1,1],[2,3,3]], [[0,1,1],[0,1,2],[1,2,100],[2,3,4]], [False,True,False,True]),
        ('example 3', 3, [], [[1,1,1],[0,2,1000000000]], [True,False]),
        ('edge: single depot', 1, [], [[0,0,1]], [True]),
        ('edge: strict boundary, unsorted queries', 4, [[0,1,3],[1,2,3],[2,3,8]], [[0,3,9],[0,2,4],[0,2,3],[0,3,8]], [True,True,False,False]),
        ('edge: self-loop cable', 2, [[0,0,1],[0,1,5]], [[0,1,5],[0,1,6]], [False,True]),
    ]

    for name, n, cables, queries, expected in cases:
        actual = can_reach_all(n, cables, queries)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
