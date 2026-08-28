# Undo-Redo Notepad — Reference Solution

## Approach

Model the document's history with **two stacks**:

- `undo`: for each `TYPE` that has happened (and hasn't been undone), this
  holds the document string as it was *right before* that `TYPE` ran.
- `redo`: for each `TYPE` that has since been undone, this holds the
  document string as it was *right after* that `TYPE` ran (i.e. the state
  `UNDO` just moved away from).

Process each operation:

- **`TYPE:<text>`** — push the *current* `doc` onto `undo` (this is the
  "before" state to return to on a future `UNDO`), then set
  `doc = doc + text`. Clear `redo` entirely — a fresh edit invalidates any
  previously undone future, exactly like a real editor.
- **`UNDO`** — if `undo` is empty, do nothing. Otherwise push the current
  `doc` onto `redo` (so `REDO` can bring it back later), then pop `undo`
  into `doc`.
- **`REDO`** — if `redo` is empty, do nothing. Otherwise push the current
  `doc` onto `undo` (so a later `UNDO` can reverse this redo), then pop
  `redo` into `doc`.

After processing every operation, `doc` is the answer.

```python
from typing import List


def undo_redo_notepad(ops: List[str]) -> str:
    doc = ""
    undo: List[str] = []
    redo: List[str] = []
    for op in ops:
        if op == "UNDO":
            if undo:
                redo.append(doc)
                doc = undo.pop()
        elif op == "REDO":
            if redo:
                undo.append(doc)
                doc = redo.pop()
        else:
            text = op[len("TYPE:"):]
            undo.append(doc)
            doc = doc + text
            redo.clear()
    return doc
```

## Why this is correct

- `undo` always holds exactly the sequence of "before" snapshots for every
  `TYPE` currently in effect, in order — the top is the most recent one,
  so popping it correctly reverses the most recent still-undoable edit.
- `redo` mirrors that same idea for undone edits: the top is the state you
  most recently moved *away from* via `UNDO`, so popping it replays
  exactly that edit.
- Clearing `redo` on every new `TYPE` matches the spec's rule that typing
  after an undo discards the redo history — this is why Example 1's
  second `UNDO`/`REDO` pair only recovers the `"!"` edit, not the earlier
  `" World"` edit that was already wiped out by the intervening `TYPE:!`.
- `UNDO`/`REDO` as no-ops when their stack is empty exactly matches "if
  there is nothing to undo/redo, do nothing" (Example 2's third `UNDO`
  and Example 3's first `REDO`).

## Complexity

- **Time:** O(total operations + total typed text length) — each
  operation does O(1) stack work plus, for `TYPE`, one string
  concatenation of the new text.
- **Space:** O(total typed text length) in the worst case, since every
  `TYPE`'s "before" snapshot is a prefix of the document and could be
  large; across all operations the stacks together hold O(n) snapshots.

## Follow-up sketch

Snapshotting full strings is wasteful because `TYPE` only ever *appends*
— it never edits earlier text — and `UNDO`/`REDO` only ever move a single
pointer backward and forward through that append history. So instead of
storing strings, store the **sequence of typed chunks** and a **cursor**
counting how many of them are currently active:

- `chunks: List[str]` — every piece of text ever typed, in typed order.
- `cursor: int` — the document is always `"".join(chunks[:cursor])`.

Then:

- **`TYPE:<text>`**: if `cursor < len(chunks)`, truncate
  `chunks = chunks[:cursor]` first (this discards the stale redo
  "future" — equivalent to clearing `redo` above). Append `text` to
  `chunks` and increment `cursor`.
- **`UNDO`**: if `cursor > 0`, decrement `cursor`.
- **`REDO`**: if `cursor < len(chunks)`, increment `cursor`.

No string is ever copied except by appending new typed text once to
`chunks`, so total work across all operations is O(total typed text
length) for the appends plus O(1) per `UNDO`/`REDO`/truncate (truncating
a list to a shorter length, or maintaining a separate "logical length"
instead of physically slicing, is O(1) amortized). Reconstructing the
final document is a single O(total typed text length) join over
`chunks[:cursor]` at the end — no intermediate full-document copies are
ever made during the simulation itself.
