# Callsign Prefix Guard

**Difficulty:** Medium
**Topic:** Tries

## Description

A dispatch system assigns unique alphanumeric **callsigns** to radio
stations. To keep transmissions unambiguous, the system enforces a
**prefix-conflict rule**: a new callsign may only be registered if it is
**not a prefix of any already-registered callsign**, and **no
already-registered callsign is a prefix of it**. (Every string is trivially
a prefix of itself, so registering an exact duplicate is always rejected
too.)

You are given a list `requests` of callsigns, to be processed **in order**.
For each request, decide whether it is safe to register under the rule
above:

- If safe, add it to the registry and mark the request as **accepted**.
- If not safe, leave the registry unchanged and mark the request as
  **rejected**.

Later requests are checked against the registry as it stands *after* all
earlier requests have been processed (so a rejected request never joins the
registry and can't cause future conflicts).

Return a list of booleans, one per request in the original order, where
`True` means that request was accepted and `False` means it was rejected.

Function signature: `register_callsigns(requests: List[str]) -> List[bool]`

## Examples

### Example 1

```
Input:  requests = ["AB12", "AB", "CD9"]
Output: [True, False, True]
```

**Explanation:** `"AB12"` registers with an empty registry, so it's
accepted. `"AB"` is a prefix of the now-registered `"AB12"`, so it's
rejected. `"CD9"` shares no prefix relationship with `"AB12"`, so it's
accepted.

### Example 2

```
Input:  requests = ["NET", "NETA", "NETB"]
Output: [True, False, False]
```

**Explanation:** `"NET"` registers first. Both `"NETA"` and `"NETB"` have
the registered `"NET"` as a prefix of themselves, so both are rejected,
even though `"NETA"` and `"NETB"` are unrelated to each other.

### Example 3

```
Input:  requests = ["X", "Y", "XY"]
Output: [True, True, False]
```

**Explanation:** `"X"` and `"Y"` register successfully since neither is a
prefix of the other. `"XY"` is rejected because the already-registered
`"X"` is a prefix of it.

## Constraints

- `1 <= requests.length <= 10^5`
- `1 <= requests[i].length <= 20`
- `requests[i]` consists only of uppercase English letters (`'A'`-`'Z'`) and
  digits (`'0'`-`'9'`).
- The total length of all strings in `requests` does not exceed `2 * 10^6`.

## Follow-up

This version only supports registering callsigns. Could you extend your
design to support a **deregister** operation that removes a previously
accepted callsign from the registry, so that future registration checks
correctly treat it as no longer present? What data would each trie node
need to track to make deregistration correct without having to rebuild the
whole trie from scratch?
