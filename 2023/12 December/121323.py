def isSubsequence(s, t):
    currentIndex = 0 # init var to easily track current position in t
    for i in range(len(s)): # iterate over each char in s
        while currentIndex < len(t): # iterate through string t starting from currentIndex
            if s[i] == t[currentIndex]: # if current char of s matches the char at currentIndex of t
                currentIndex += 1 # move to next character in t and exit inner loop
                break
            currentIndex += 1 # move to next character in t if no match
        else:
            return False # if currentIndex exceeds ength of t, s is not a subsequence of t
    return True # if func hasn't returned false, s is a subsequence of t







print(isSubsequence(s = "abc", t = "ahbgdc"))
print(isSubsequence(s = "axc", t = "ahbgdc"))







# 392. Is Subsequence
# Easy
# Topics
# Companies
# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

# Example 1:

# Input: s = "abc", t = "ahbgdc"
# Output: true
# Example 2:

# Input: s = "axc", t = "ahbgdc"
# Output: false
 

# Constraints:

# 0 <= s.length <= 100
# 0 <= t.length <= 104
# s and t consist only of lowercase English letters.

# Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?