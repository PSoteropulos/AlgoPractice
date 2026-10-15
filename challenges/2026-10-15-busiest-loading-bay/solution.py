from typing import List


def busiest_bay(n: int, trucks: List[List[int]]) -> int:
    """Return the bay that served the most trucks (smallest number on ties)."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', 2, [[1,5],[2,2],[3,1],[6,1]], 0),
        ('example 2', 3, [[1,10],[2,1],[3,1],[4,1],[5,10]], 1),
        ('example 3', 3, [[1,2],[1,2],[2,1],[3,1],[3,5]], 0),
        ('edge: single bay rejects simultaneous truck', 1, [[1,1],[1,1]], 0),
        ('edge: rejections then tie', 2, [[1,100],[1,100],[2,1],[3,1],[4,1]], 0),
        ('edge: freed bay reused over higher bay', 3, [[1,1],[1,5],[2,1],[2,5],[3,1],[3,1]], 0),
    ]

    for name, n, trucks, expected in cases:
        actual = busiest_bay(n, trucks)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
