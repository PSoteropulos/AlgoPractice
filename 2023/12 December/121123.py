def repeatedSubstringPattern(s):
    for i in range(1, len(s) // 2 + 1):
        if len(s) % i == 0:
            sub_string = s[:i]
            repeat_count = len(s) // len(sub_string)
            if sub_string * repeat_count == s:
                return True
    return False






print(repeatedSubstringPattern("abab"))
print(repeatedSubstringPattern("aba"))
print(repeatedSubstringPattern("abcabcabcabc"))






# 459. Repeated Substring Pattern
# Easy
# Topics
# Companies
# Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

 

# Example 1:

# Input: s = "abab"
# Output: true
# Explanation: It is the substring "ab" twice.
# Example 2:

# Input: s = "aba"
# Output: false
# Example 3:

# Input: s = "abcabcabcabc"
# Output: true
# Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

# Constraints:

# 1 <= s.length <= 104
# s consists of lowercase English letters.