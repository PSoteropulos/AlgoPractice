def wordPattern(pattern, s):
    sArray = s.split(" ")
    patternObject = {}
    sObject = {}
    if len(sArray)!=len(pattern): return False
    for i in range(len(pattern)):
        if (pattern[i] in patternObject and sArray[i] != patternObject[pattern[i]]) or (sArray[i] in sObject and pattern[i] != sObject[sArray[i]]):
            return False
        patternObject[pattern[i]] = sArray[i]
        sObject[sArray[i]] = pattern[i]
    return True






print(wordPattern(pattern = "abba", s = "dog cat cat dog"))
print(wordPattern(pattern = "abba", s = "dog cat cat fish"))
print(wordPattern(pattern = "aaaa", s = "dog cat cat dog"))








# 290. Word Pattern
# Easy
# Topics
# Companies
# Given a pattern and a string s, find if s follows the same pattern.

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

# Example 1:

# Input: pattern = "abba", s = "dog cat cat dog"
# Output: true
# Example 2:

# Input: pattern = "abba", s = "dog cat cat fish"
# Output: false
# Example 3:

# Input: pattern = "aaaa", s = "dog cat cat dog"
# Output: false
 

# Constraints:

# 1 <= pattern.length <= 300
# pattern contains only lower-case English letters.
# 1 <= s.length <= 3000
# s contains only lowercase English letters and spaces ' '.
# s does not contain any leading or trailing spaces.
# All the words in s are separated by a single space.