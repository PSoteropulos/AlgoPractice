def findMaxK(nums):
    answer = -1
    nums.sort()
    for num in nums:
        if num >= 0:
            break
        elif abs(num) in nums:
            answer = abs(num)
            break
    return answer





print(findMaxK([-1,2,-3,3]))
print(findMaxK([-1,10,6,7,-7,1]))
print(findMaxK([-10,8,6,7,-2,-3]))




# 2441. Largest Positive Integer That Exists With Its Negative
# Easy
# 382
# 10
# Companies
# Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

# Return the positive integer k. If there is no such integer, return -1.

 

# Example 1:

# Input: nums = [-1,2,-3,3]
# Output: 3
# Explanation: 3 is the only valid k we can find in the array.
# Example 2:

# Input: nums = [-1,10,6,7,-7,1]
# Output: 7
# Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.
# Example 3:

# Input: nums = [-10,8,6,7,-2,-3]
# Output: -1
# Explanation: There is no a single valid k, we return -1.
 

# Constraints:

# 1 <= nums.length <= 1000
# -1000 <= nums[i] <= 1000
# nums[i] != 0
# Accepted
# 42.6K
# Submissions
# 62.6K
# Acceptance Rate
# 68.0%