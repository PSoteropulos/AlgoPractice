def moveZeroes(nums):
    for i in range(len(nums)-1,-1,-1):
        if nums[i] == 0:
            nums.pop(i)
            nums.append(0)
    return nums






print(moveZeroes([0,1,0,3,12]))
print(moveZeroes([0]))






# 283. Move Zeroes
# Easy
# 14.3K
# 364
# Companies
# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

 

# Example 1:

# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Example 2:

# Input: nums = [0]
# Output: [0]
 

# Constraints:

# 1 <= nums.length <= 104
# -231 <= nums[i] <= 231 - 1
 

# Follow up: Could you minimize the total number of operations done?
# Accepted
# 2.3M
# Submissions
# 3.8M
# Acceptance Rate
# 61.4%