def findMaxConsecutiveOnes(nums):
    totalMax = 0
    currentMax = 0
    for i in range(len(nums)):
        if (i==0 and nums[i]==1):
            currentMax = 1
        elif (nums[i]==1 and nums[i-1]==1):
            currentMax += 1
        elif (nums[i]==1):
            currentMax = 1
        else:
            currentMax = 0
        if (currentMax > totalMax):
            totalMax = currentMax
    return totalMax





print(findMaxConsecutiveOnes([1,1,0,1,1,1]))
print(findMaxConsecutiveOnes([1,0,1,1,0,1]))







# 485. Max Consecutive Ones
# Easy
# 5K
# 442
# Companies
# Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

# Example 1:

# Input: nums = [1,1,0,1,1,1]
# Output: 3
# Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
# Example 2:

# Input: nums = [1,0,1,1,0,1]
# Output: 2
 

# Constraints:

# 1 <= nums.length <= 105
# nums[i] is either 0 or 1.
# Accepted
# 945.7K
# Submissions
# 1.6M
# Acceptance Rate
# 57.5%