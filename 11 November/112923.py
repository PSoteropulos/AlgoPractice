def backspaceCompare(s, t):
    longestString = s if len(s) >= len(t) else t
    s1 = ""
    s2 = ""
    for i in range(len(longestString)):
        if (i<len(s) and s[i]!="#"):
            s1 += s[i]
        elif (i<len(s)):
            s1 = s1[:-1]
        if (i<len(t) and t[i]!="#"):
            s2 += t[i]
        elif (i<len(t)):
            s2 = s2[:-1]
    return True if s1 == s2 else False






print(backspaceCompare(s = "ab#c", t = "ad#c"))
print(backspaceCompare(s = "ab##", t = "c#d#"))
print(backspaceCompare(s = "a#c", t = "b"))







# 844. Backspace String Compare
# Easy
# Topics
# Companies
# Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

# Note that after backspacing an empty text, the text will continue empty.

 

# Example 1:

# Input: s = "ab#c", t = "ad#c"
# Output: true
# Explanation: Both s and t become "ac".
# Example 2:

# Input: s = "ab##", t = "c#d#"
# Output: true
# Explanation: Both s and t become "".
# Example 3:

# Input: s = "a#c", t = "b"
# Output: false
# Explanation: s becomes "c" while t becomes "b".
 

# Constraints:

# 1 <= s.length, t.length <= 200
# s and t only contain lowercase letters and '#' characters.
 

# Follow up: Can you solve it in O(n) time and O(1) space?