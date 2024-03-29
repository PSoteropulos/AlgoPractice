def isSameAfterReversals(num):
    numString = str(num)
    if (numString[len(numString)-1] == "0") and (len(numString)>1):
        return False
    else:
        return True



print(isSameAfterReversals(526))
print(isSameAfterReversals(1800))
print(isSameAfterReversals(0))





# 2119. A Number After a Double Reversal
# Easy
# 500
# 27
# Companies
# Reversing an integer means to reverse all its digits.

# For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
# Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

 

# Example 1:

# Input: num = 526
# Output: true
# Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.
# Example 2:

# Input: num = 1800
# Output: false
# Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.
# Example 3:

# Input: num = 0
# Output: true
# Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.
 

# Constraints:

# 0 <= num <= 106
# Accepted
# 55.9K
# Submissions
# 72.5K
# Acceptance Rate
# 77.1%