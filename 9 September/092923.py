def isHappy(n):
    running=True
    seenSet = set()
    array = [*str(n)]
    while running:
        newNum = 0
        for num in array:
            newNum += (int(num)*int(num))
        if newNum == 1:
            return True
        array = [*str(newNum)]
        if newNum in seenSet:
            return False
        else:
            seenSet.add(newNum)





print(isHappy(19))
print(isHappy(2))








# 202. Happy Number
# Easy
# Topics
# Companies
# Write an algorithm to determine if a number n is happy.

# A happy number is a number defined by the following process:

# Starting with any positive integer, replace the number by the sum of the squares of its digits.
# Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
# Those numbers for which this process ends in 1 are happy.
# Return true if n is a happy number, and false if not.

 

# Example 1:

# Input: n = 19
# Output: true
# Explanation:
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1
# Example 2:

# Input: n = 2
# Output: false
 

# Constraints:

# 1 <= n <= 231 - 1
# Accepted
# 1.3M
# Submissions
# 2.3M
# Acceptance Rate
# 55.3%