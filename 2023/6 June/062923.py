def findSubarrays(nums):
    for i in range(0, len(nums)-2):
        loop1sum = nums[i]+nums[i+1]
        for j in range(i+1, len(nums)-1):
            if nums[j]+nums[j+1]==loop1sum:
                return True
    return False





print(findSubarrays([4,2,4]))
print(findSubarrays([1,2,3,4,5]))
print(findSubarrays([0,0,0]))





# 2395. Find Subarrays With Equal Sum
# Easy
# 416
# 21
# Companies
# Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

# Return true if these subarrays exist, and false otherwise.

# A subarray is a contiguous non-empty sequence of elements within an array.

 

# Example 1:

# Input: nums = [4,2,4]
# Output: true
# Explanation: The subarrays with elements [4,2] and [2,4] have the same sum of 6.
# Example 2:

# Input: nums = [1,2,3,4,5]
# Output: false
# Explanation: No two subarrays of size 2 have the same sum.
# Example 3:

# Input: nums = [0,0,0]
# Output: true
# Explanation: The subarrays [nums[0],nums[1]] and [nums[1],nums[2]] have the same sum of 0. 
# Note that even though the subarrays have the same content, the two subarrays are considered different because they are in different positions in the original array.
 

# Constraints:

# 2 <= nums.length <= 1000
# -109 <= nums[i] <= 109
# Accepted
# 37.6K
# Submissions
# 58.4K
# Acceptance Rate
# 64.4%