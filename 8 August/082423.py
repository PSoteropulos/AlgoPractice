def maxScore(s):
    maxScore = 0
    s = [*s]
    for i in range(len(s)-1):
        localScore = 0
        leftString = ""
        rightString = ""
        for j in range(len(s)):
            if (j <= i):
                leftString += s[j]
            else:
                rightString += s[j]
        for leftIndex in range(len(leftString)):
            if (leftString[leftIndex] == "0"):
                localScore += 1
        for rightIndex in range(len(rightString)):
            if (rightString[rightIndex] == "1"):
                localScore += 1
        if (localScore > maxScore):
            maxScore = localScore
    return maxScore






print(maxScore("011101"))
print(maxScore("00111"))
print(maxScore("1111"))







# 1422. Maximum Score After Splitting a String
# Easy
# 625
# 36
# Companies
# Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).

# The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

 

# Example 1:

# Input: s = "011101"
# Output: 5 
# Explanation: 
# All possible ways of splitting s into two non-empty substrings are:
# left = "0" and right = "11101", score = 1 + 4 = 5 
# left = "01" and right = "1101", score = 1 + 3 = 4 
# left = "011" and right = "101", score = 1 + 2 = 3 
# left = "0111" and right = "01", score = 1 + 1 = 2 
# left = "01110" and right = "1", score = 2 + 1 = 3
# Example 2:

# Input: s = "00111"
# Output: 5
# Explanation: When left = "00" and right = "111", we get the maximum score = 2 + 3 = 5
# Example 3:

# Input: s = "1111"
# Output: 3
 

# Constraints:

# 2 <= s.length <= 500
# The string s consists of characters '0' and '1' only.
# Accepted
# 48.5K
# Submissions
# 83.8K
# Acceptance Rate
# 57.9%