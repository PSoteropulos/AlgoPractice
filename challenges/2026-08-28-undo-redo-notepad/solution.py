from typing import List


def undo_redo_notepad(ops: List[str]) -> str:
    """Simulate TYPE/UNDO/REDO operations and return the final document."""
    # TODO: implement
    pass


if __name__ == "__main__":
    tests = [
        (["TYPE:Hello", "TYPE: World", "UNDO", "TYPE:!", "UNDO", "REDO"], "Hello!"),
        (["TYPE:abc", "TYPE:def", "UNDO", "UNDO", "UNDO", "REDO"], "abc"),
        (["TYPE:hi", "REDO", "UNDO", "TYPE:there", "REDO"], "there"),
        (["UNDO", "REDO", "UNDO"], ""),  # extra: no TYPE ever happened
        (["TYPE:a", "UNDO", "TYPE:b", "TYPE:c", "UNDO", "UNDO", "REDO", "REDO"], "bc"),  # extra: redo chain after multiple undos
    ]

    for ops, expected in tests:
        got = undo_redo_notepad(ops)
        status = "PASS" if got == expected else "FAIL"
        print(f"{status} ops={ops} expected={expected!r} got={got!r}")
