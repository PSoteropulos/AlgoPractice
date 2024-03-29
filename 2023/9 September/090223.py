def pivotInteger(n):
    for i in range(1, n+1):
        first = 0
        second = 0
        for j in range(1, i+1):
            first += j
        for h in range(i, n+1):
            second += h
        if first == second:
            return i
    return -1







print(pivotInteger(8))
print(pivotInteger(1))
print(pivotInteger(4))





# 2485. Find the Pivot Integer
# Easy
# 531
# 10
# Companies
# Given a positive integer n, find the pivot integer x such that:

# The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
# Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

 

# Example 1:

# Input: n = 8
# Output: 6
# Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
# Example 2:

# Input: n = 1
# Output: 1
# Explanation: 1 is the pivot integer since: 1 = 1.
# Example 3:

# Input: n = 4
# Output: -1
# Explanation: It can be proved that no such integer exist.
 

# Constraints:

# 1 <= n <= 1000
# Accepted
# 46.2K
# Submissions
# 57.9K
# Acceptance Rate
# 79.8%