def reverseStr(s, k):
    newString = ""
    for i in range(0, len(s), 2*k):
        firstChar = []
        others = []
        thisString = ""
        for j in range(i, i+(2*k), 1):
            if (j < i+ k):
                if j<len(s):
                    firstChar.append(s[j])
            elif j<len(s):
                others.append(s[j])
            else: break
        firstChar.reverse()
        firstChar = "".join(firstChar)
        others = "".join(others)
        thisString = firstChar + others
        newString += thisString
    return newString






print(reverseStr(s = "abcdefg", k = 2))
print(reverseStr(s = "abcd", k = 2))
print(reverseStr(s = "a", k = 2))







# 541. Reverse String II
# Easy
# Topics
# Companies
# Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

# If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

# Example 1:

# Input: s = "abcdefg", k = 2
# Output: "bacdfeg"
# Example 2:

# Input: s = "abcd", k = 2
# Output: "bacd"
 

# Constraints:

# 1 <= s.length <= 104
# s consists of only lowercase English letters.
# 1 <= k <= 104