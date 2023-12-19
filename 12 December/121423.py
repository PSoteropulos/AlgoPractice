def isIsomorphic(s, t):
    charObjectS = {}
    charObjectT = {}
    for i in range(len(s)):
        if ((s[i] in charObjectS.keys() and t[i] != charObjectS[s[i]]) or (t[i] in charObjectT.keys() and s[i] != charObjectT[t[i]])):
            return False
        elif ((s[i] in charObjectS.keys() and t[i] == charObjectS[s[i]]) and (t[i] in charObjectT.keys() and s[i] == charObjectT[t[i]])):
            continue
        else:
            if (s[i] not in charObjectS.keys()):
                charObjectS[s[i]] = t[i]
            if (t[i] not in charObjectT.keys()):
                charObjectT[t[i]] = s[i]
    return True







print(isIsomorphic(s = "egg", t = "add"))
print(isIsomorphic(s = "foo", t = "bar"))
print(isIsomorphic(s = "paper", t = "title"))








# 205. Isomorphic Strings
# Easy
# Topics
# Companies
# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

# Example 1:

# Input: s = "egg", t = "add"
# Output: true
# Example 2:

# Input: s = "foo", t = "bar"
# Output: false
# Example 3:

# Input: s = "paper", t = "title"
# Output: true
 

# Constraints:

# 1 <= s.length <= 5 * 104
# t.length == s.length
# s and t consist of any valid ascii character.