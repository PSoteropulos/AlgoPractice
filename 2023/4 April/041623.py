def findGCD(nums):
    nums.sort()
    smolBoi = nums[0]
    smolBoiFactors = []
    for i in range(1, smolBoi+1):
        if (smolBoi % i == 0):
            smolBoiFactors.append(i)
    for j in range(len(smolBoiFactors)-1, -1, -1):
        if (nums[len(nums)-1] % smolBoiFactors[j] == 0):
            return smolBoiFactors[j]



print(findGCD([2,5,6,9,10]))
print(findGCD([7,5,6,8,3]))
print(findGCD([3,3]))
print(findGCD([6,7,9]))
print(findGCD([6,9,10]))



# 1979. Find Greatest Common Divisor of Array
# Easy
# 840
# 33
# Companies
# Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

# The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

 

# Example 1:

# Input: nums = [2,5,6,9,10]
# Output: 2
# Explanation:
# The smallest number in nums is 2.
# The largest number in nums is 10.
# The greatest common divisor of 2 and 10 is 2.
# Example 2:

# Input: nums = [7,5,6,8,3]
# Output: 1
# Explanation:
# The smallest number in nums is 3.
# The largest number in nums is 8.
# The greatest common divisor of 3 and 8 is 1.
# Example 3:

# Input: nums = [3,3]
# Output: 3
# Explanation:
# The smallest number in nums is 3.
# The largest number in nums is 3.
# The greatest common divisor of 3 and 3 is 3.
 

# Constraints:

# 2 <= nums.length <= 1000
# 1 <= nums[i] <= 1000
# Accepted
# 81.3K
# Submissions
# 105.6K
# Acceptance Rate
# 77.0%