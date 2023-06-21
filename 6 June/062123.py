def countEven(num):
    count = 0
    for i in range(1,num+1):
        localArray = [*str(i)]
        localSum = 0
        for digit in localArray:
            localSum += int(digit)
        if localSum % 2 == 0:
            count += 1
    return count




print(countEven(4))
print(countEven(30))







# 2180. Count Integers With Even Digit Sum
# Easy
# 506
# 23
# Companies
# Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

# The digit sum of a positive integer is the sum of all its digits.

 

# Example 1:

# Input: num = 4
# Output: 2
# Explanation:
# The only integers less than or equal to 4 whose digit sums are even are 2 and 4.    
# Example 2:

# Input: num = 30
# Output: 14
# Explanation:
# The 14 integers less than or equal to 30 whose digit sums are even are
# 2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
 

# Constraints:

# 1 <= num <= 1000
# Accepted
# 44.5K
# Submissions
# 67.8K
# Acceptance Rate
# 65.6%