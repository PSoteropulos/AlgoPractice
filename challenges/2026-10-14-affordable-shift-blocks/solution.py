from typing import List


def affordable_shift_blocks(pay: List[int], budget: int) -> int:
    """Return the number of contiguous blocks whose total pay is <= budget."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ('example 1', [2,1,3], 3, 4),
        ('example 2', [4,5], 3, 0),
        ('example 3', [1,1,1,1], 2, 7),
        ('edge: single shift exactly on budget', [5], 5, 1),
        ('edge: everything affordable', [1,1,1], 100, 6),
        ('edge: answer exceeds 32-bit', [1] * 100000, 10**9, 5000050000),
    ]

    for name, pay, budget, expected in cases:
        actual = affordable_shift_blocks(pay, budget)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
