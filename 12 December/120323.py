import math

def countLargestGroup(n):
    sumGroups = {}
    def sumOfDigits(num):
        # return sum(int(digit) for digit in str(num)) using list comprehension/generators
        sum = 0
        while (num > 0):
            sum += num % 10
            num = math.floor(num / 10)
        return sum
    for i in range(1, n+1):
        sum = sumOfDigits(i)
        if sum not in sumGroups:
            sumGroups[sum] = []
        sumGroups[sum].append(i)
    maxGroupSize = 0
    for group in sumGroups.values():
        if len(group) > maxGroupSize:
            maxGroupSize = len(group)
    largestGroupsCount = 0
    for group in sumGroups.values():
        if len(group) == maxGroupSize:
            largestGroupsCount+= 1
    return largestGroupsCount






print(countLargestGroup(13))
print(countLargestGroup(2))









# 1399. Count Largest Group
# Easy
# Topics
# Companies
# Hint
# You are given an integer n.

# Each number from 1 to n is grouped according to the sum of its digits.

# Return the number of groups that have the largest size.

 

# Example 1:

# Input: n = 13
# Output: 4
# Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
# [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
# There are 4 groups with largest size.
# Example 2:

# Input: n = 2
# Output: 2
# Explanation: There are 2 groups [1], [2] of size 1.
 

# Constraints:

# 1 <= n <= 104