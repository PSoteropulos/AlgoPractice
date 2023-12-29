def longestPalindrome(s):
    occurrences = {}
    for char in s:
        if char in occurrences.keys():
            occurrences[char] += 1
        else:
            occurrences[char] = 1
    total = 0
    hasOdd = False
    for count in occurrences.values():
        if count%2 == 0:
            total += count
        else:
            hasOdd = True
            total += count - 1
    return total+1 if hasOdd else total







print(longestPalindrome("abccccdd"))
print(longestPalindrome("a"))








# 409. Longest Palindrome
# Easy
# Topics
# Companies
# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

# Example 1:

# Input: s = "abccccdd"
# Output: 7
# Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
# Example 2:

# Input: s = "a"
# Output: 1
# Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

# Constraints:

# 1 <= s.length <= 2000
# s consists of lowercase and/or uppercase English letters only.