import math

def averageValue(nums):
    values = []
    sum = 0
    for i in range(len(nums)):
        if (nums[i] % 6 == 0):
            values.append(nums[i])
            sum += nums[i]
    if len(values) > 0:
        return math.floor(sum / len(values))
    else:
        return 0






print(averageValue([1,3,6,10,12,15]))
print(averageValue([1,2,4,7,10]))






# 2455. Average Value of Even Numbers That Are Divisible by Three
# Easy
# 264
# 29
# Companies
# Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

# Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

 

# Example 1:

# Input: nums = [1,3,6,10,12,15]
# Output: 9
# Explanation: 6 and 12 are even numbers that are divisible by 3. (6 + 12) / 2 = 9.
# Example 2:

# Input: nums = [1,2,4,7,10]
# Output: 0
# Explanation: There is no single number that satisfies the requirement, so return 0.
 

# Constraints:

# 1 <= nums.length <= 1000
# 1 <= nums[i] <= 1000
# Accepted
# 41.5K
# Submissions
# 70.1K
# Acceptance Rate
# 59.2%