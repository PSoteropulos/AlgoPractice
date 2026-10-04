# Shortest Unique Shortcodes

**Difficulty:** Medium
**Topic:** Tries

## Description

A command-line tool lets you type a *shortcode* instead of a full command
name. A shortcode for a command is any non-empty prefix of its name, and it is
only usable if **no other command** in the list starts with that prefix.

Given an array `names` of distinct lowercase command names, return an array
`codes` of the same length where `codes[i]` is the **shortest** usable
shortcode for `names[i]`.

If no prefix of `names[i]` is usable (this happens exactly when `names[i]` is
itself a prefix of some other name), set `codes[i] = names[i]`, the full name.

## Examples

### Example 1

**Input:** `names = ["apple", "apply", "ape", "bat"]`

**Output:** `["apple", "apply", "ape", "b"]`

**Explanation:** `"a"` and `"ap"` are shared by three names, and `"app"`/`"appl"`
by both `"apple"` and `"apply"`, so those two need their full names. `"ape"`
is the first prefix of that name that nobody else shares (`"ap"` is shared).
`"bat"` is the only name starting with `"b"`.

### Example 2

**Input:** `names = ["zebra", "zoo", "zone", "yak"]`

**Output:** `["ze", "zoo", "zon", "y"]`

**Explanation:** `"z"` is shared by three names. `"ze"` is only in `"zebra"`.
`"zo"` is shared by `"zoo"` and `"zone"`, so `"zoo"` needs three letters, and
`"zone"` is unique from `"zon"`. `"y"` is unique to `"yak"`.

### Example 3

**Input:** `names = ["ab", "abc", "abcd"]`

**Output:** `["ab", "abc", "abcd"]`

**Explanation:** `"ab"` and `"abc"` are each a prefix of a longer name, so
none of their prefixes is usable and they keep their full names. For `"abcd"`,
the prefixes `"a"`, `"ab"` and `"abc"` all start other names too, so only the
full `"abcd"` is usable.

## Constraints

- `1 <= len(names) <= 10^5`
- `1 <= len(names[i])`, and the total length of all names is at most `10^6`
- `names[i]` consists of lowercase English letters
- All names are distinct

## Follow-up

How would you answer the same question if names arrive one at a time and you
must report the current shortcode of a given name on demand?
