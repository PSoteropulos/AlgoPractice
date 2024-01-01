def isThree(n):
    divCount = 0
    for i in range(n, 0, -1):
        if n%i==0:
            divCount += 1
    return True if divCount ==3 else False





print(isThree(2))
print(isThree(4))






# 1952. Three Divisors
# Easy
# 457
# 23
# Companies
# Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

# An integer m is a divisor of n if there exists an integer k such that n = k * m.

 

# Example 1:

# Input: n = 2
# Output: false
# Explantion: 2 has only two divisors: 1 and 2.
# Example 2:

# Input: n = 4
# Output: true
# Explantion: 4 has three divisors: 1, 2, and 4.
 

# Constraints:

# 1 <= n <= 104
# Accepted
# 49.8K
# Submissions
# 84.7K
# Acceptance Rate
# 58.8%