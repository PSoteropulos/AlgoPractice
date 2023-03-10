def subtractProductAndSum(n):
    digitProduct = 1
    digitSum = 0
    nString = str(n)
    digitArray = [ ]
    for digit in nString:
        digitArray.append(digit)
    for digit in digitArray:
        digitProduct = digitProduct * int(digit)
        digitSum = digitSum + int(digit)
    return digitProduct - digitSum


print(subtractProductAndSum(234))
print(subtractProductAndSum(4421))







# 1281. Subtract the Product and Sum of Digits of an Integer
# Easy
# 1.9K
# 208
# Companies
# Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

# Example 1:

# Input: n = 234
# Output: 15 
# Explanation: 
# Product of digits = 2 * 3 * 4 = 24 
# Sum of digits = 2 + 3 + 4 = 9 
# Result = 24 - 9 = 15
# Example 2:

# Input: n = 4421
# Output: 21
# Explanation: 
# Product of digits = 4 * 4 * 2 * 1 = 32 
# Sum of digits = 4 + 4 + 2 + 1 = 11 
# Result = 32 - 11 = 21
 

# Constraints:

# 1 <= n <= 10^5