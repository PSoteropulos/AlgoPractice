# Reference Solution: Callsign Prefix Guard

## Approach

This is a **trie (prefix tree)** problem where the trie is built up
incrementally and every insertion doubles as a conflict check.

Build a trie whose nodes track `children` (a map from character to child
node) and `isEnd` (whether some registered callsign ends exactly at this
node). For each request `s`, walk the trie one character at a time while
deciding whether to commit it:

1. **Walk existing characters.** For each character of `s`, before
   descending into (or creating) the child node, check whether the
   *current* node is marked `isEnd`. If it is, some shorter, already
   registered callsign is a prefix of `s` — reject immediately without
   mutating the trie.
2. **Check what's below.** After walking all of `s`'s characters, look at
   the node reached. If it is already marked `isEnd` (exact duplicate) or
   already has any children (some longer registered callsign has `s` as a
   prefix), reject.
3. **Commit.** If neither check tripped, mark the final node `isEnd = true`
   and accept the request. Any trie nodes created while walking `s` are
   kept regardless of outcome — they're harmless since only `isEnd` flags
   represent actual registrations, and reusing shared prefixes is exactly
   the point of a trie.

Because step 1 aborts as soon as it crosses a registered word boundary, and
step 2 catches the "s is a prefix of something longer" case in one lookup,
every request is resolved in a single pass over its own characters, with no
backtracking or need to inspect other requests.

```python
from typing import List, Dict


class _Node:
    __slots__ = ("children", "is_end")

    def __init__(self) -> None:
        self.children: Dict[str, "_Node"] = {}
        self.is_end = False


def register_callsigns(requests: List[str]) -> List[bool]:
    root = _Node()
    accepted = []

    for s in requests:
        node = root
        conflict = False

        for ch in s:
            if node.is_end:
                conflict = True
                break
            if ch not in node.children:
                node.children[ch] = _Node()
            node = node.children[ch]

        if not conflict and (node.is_end or node.children):
            conflict = True

        if conflict:
            accepted.append(False)
        else:
            node.is_end = True
            accepted.append(True)

    return accepted
```

### Worked check against the examples

- `["AB12", "AB", "CD9"]`: `"AB12"` walks into a fresh trie, ends at a node
  with no children and not `isEnd` → accepted, that node becomes `isEnd`.
  `"AB"` walks `A` → `B`; neither `A` nor `B` is `isEnd` yet, but the node
  for `"AB"` now has a child (`1`, from `"AB12"`) → rejected. `"CD9"` shares
  no prefix with the existing trie branch, walks cleanly, ends at a
  childless, non-`isEnd` node → accepted. Result `[True, False, True]`. ✓
- `["NET", "NETA", "NETB"]`: `"NET"` accepted, its end node marked `isEnd`.
  `"NETA"` walks `N`→`E`→`T`; the node for `"NET"` is `isEnd`, so as soon as
  the walk reaches it (before consuming the trailing `A`) it's rejected.
  `"NETB"` hits the same `isEnd` node at `"NET"` and is rejected too, even
  though `"NETA"` and `"NETB"` never interact directly. Result
  `[True, False, False]`. ✓
- `["X", "Y", "XY"]`: `"X"` and `"Y"` occupy disjoint one-character
  branches and both accept. `"XY"` walks into the `X` branch, finds that
  node already `isEnd`, and is rejected before ever reaching `Y`. Result
  `[True, True, False]`. ✓

Edge cases: registering the same callsign twice (`["A", "A"]`) accepts the
first and rejects the second, since the second walk immediately finds the
end node both `isEnd` *and* childless, tripping the duplicate check in step
2. A chain like `["AB", "ABC", "A"]` accepts `"AB"`, rejects `"ABC"`
(walks through the `isEnd` node for `"AB"`), and rejects `"A"` (its end
node — the `A` node — already has a child `B`, from `"AB"`).

## Complexity

- **Time:** `O(L)` total, where `L` is the sum of the lengths of all
  strings in `requests`. Each request does one bounded walk of its own
  length through the trie, with `O(1)` amortized work (a hash-map lookup
  or insert) per character.
- **Space:** `O(L)` in the worst case for the trie nodes created across all
  accepted (and partially-walked, then rejected) requests — no two
  requests share more nodes than their common registered prefixes allow.

### Follow-up sketch

To support **deregistering** a callsign, give each node an additional
integer `passCount` — the number of currently-registered callsigns whose
path runs through that node (incremented along the insertion path whenever
a request is accepted, not just at the final node). Deregistering `s`
walks the same path used to register it, decrements `passCount` at each
node, clears that node's `isEnd` flag, and prunes any node whose
`passCount` drops to `0` (removing it from its parent's `children`) so
future registration walks don't see stale branches. Both the prefix check
(is the current node `isEnd`?) and the "something longer is registered"
check (does the final node have children with positive `passCount`?)
continue to work unchanged, so registration checks stay `O(|s|)` and
deregistration is also `O(|s|)`.
