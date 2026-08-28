# Undo-Redo Notepad

**Difficulty:** Medium
**Topic:** Stacks / Queues (Design)

## Description

You're building the backend for a tiny notepad app. The document starts as
an empty string. The user performs a sequence of operations, each one of:

- `"TYPE:<text>"` — appends `<text>` to the end of the current document.
  `<text>` is everything after the first `:` (it may itself contain
  spaces, digits, punctuation, or even more `:` characters, and may be
  empty).
- `"UNDO"` — reverts the document to the state it was in immediately
  before the most recent `TYPE` that hasn't already been undone. If there
  is nothing left to undo, this operation does nothing.
- `"REDO"` — re-applies the most recently undone `TYPE`, restoring the
  document to the state it was in right after that `TYPE` originally ran.
  If there is nothing to redo, this operation does nothing. Just like in
  a real editor, performing a new `TYPE` clears any pending redo history —
  once you've typed something new, you can no longer redo the edits you
  had undone before it.

Given the list of operations in the order they occur, return the final
document string.

## Examples

**Example 1**

```
Input:  ops = ["TYPE:Hello", "TYPE: World", "UNDO", "TYPE:!", "UNDO", "REDO"]
Output: "Hello!"
```

Explanation: `"Hello"` → `"Hello World"` → `UNDO` back to `"Hello"` →
`TYPE:!` gives `"Hello!"` (this new `TYPE` clears the redo history that
held `"Hello World"`) → `UNDO` back to `"Hello"` → `REDO` re-applies the
`"!"` typing, giving `"Hello!"`.

**Example 2**

```
Input:  ops = ["TYPE:abc", "TYPE:def", "UNDO", "UNDO", "UNDO", "REDO"]
Output: "abc"
```

Explanation: `"abc"` → `"abcdef"` → `UNDO` back to `"abc"` → `UNDO` back
to `""` → `UNDO` has nothing left to undo, so it's a no-op (document
stays `""`) → `REDO` re-applies the most recently undone `TYPE`, which
was the one that produced `"abc"`, giving `"abc"`.

**Example 3**

```
Input:  ops = ["TYPE:hi", "REDO", "UNDO", "TYPE:there", "REDO"]
Output: "there"
```

Explanation: `"hi"` → `REDO` has nothing to redo yet, so it's a no-op →
`UNDO` back to `""` → `TYPE:there` gives `"there"` (this clears the
pending redo of `"hi"`) → `REDO` has nothing to redo (the redo history was
just cleared), so it's a no-op. Final document is `"there"`.

## Constraints

- `1 <= ops.length <= 2 * 10^5`
- Each element of `ops` is exactly `"UNDO"`, `"REDO"`, or a string starting
  with `"TYPE:"` followed by 0 to 50 characters of text (letters, digits,
  spaces, or punctuation — never a newline).
- The sum of all typed text lengths across every `TYPE` operation is at
  most `10^6`.
- `"UNDO"` and `"REDO"` are case-sensitive and always appear exactly as
  shown.

## Follow-up

A direct implementation might store a full snapshot of the document
string before every `TYPE`, so `UNDO`/`REDO` can restore it. That costs
`O(total document length)` memory and time per snapshot, which can blow
up to `O(n^2)` overall if the document grows large and is edited many
times. Design an approach that instead runs in `O(total typed text
length)` total time and space across all operations, without ever storing
more than one full copy of the current document text. (Hint: since `TYPE`
only ever appends, and `UNDO`/`REDO` only move backward and forward
through the history of appends, you don't need to store snapshots at
all — think about what single number fully describes "how much of the
typed history is currently visible.")
