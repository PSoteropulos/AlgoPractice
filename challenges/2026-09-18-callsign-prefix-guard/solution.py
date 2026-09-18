from typing import List


def register_callsigns(requests: List[str]) -> List[bool]:
    """Process callsign registration requests in order, rejecting any
    request that is a prefix of (or has as a prefix) an already-registered
    callsign. Returns one bool per request: True if accepted."""
    # TODO: implement
    pass


def _run_self_checks() -> None:
    cases = [
        ("example 1", ["AB12", "AB", "CD9"], [True, False, True]),
        ("example 2", ["NET", "NETA", "NETB"], [True, False, False]),
        ("example 3", ["X", "Y", "XY"], [True, True, False]),
        ("edge: exact duplicate", ["A", "A"], [True, False]),
        ("edge: chain of prefixes then unrelated", ["AB", "ABC", "A"], [True, False, False]),
    ]

    for name, requests, expected in cases:
        actual = register_callsigns(requests)
        status = "PASS" if actual == expected else "FAIL"
        print(f"[{status}] {name}: expected={expected!r} actual={actual!r}")


if __name__ == "__main__":
    _run_self_checks()
