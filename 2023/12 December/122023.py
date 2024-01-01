# utilizing enumerate
def containsNearbyDuplicate(nums, k):
    seen_nums = {}
    for i, num in enumerate(nums):
        if num in seen_nums:
            if i - seen_nums[num] <= k:
                return True
        seen_nums[num] = i
    return False




# original way
# def containsNearbyDuplicate(nums, k):
#     seenNums = {}
#     for i in range(len(nums)):
#         if nums[i] in seenNums:
#             if i-seenNums[nums[i]] <= k:
#                 return True
#         seenNums[nums[i]] = i
#     return False







print(containsNearbyDuplicate(nums = [1,2,3,1], k = 3))
print(containsNearbyDuplicate(nums = [1,0,1,1], k = 1))
print(containsNearbyDuplicate(nums = [1,2,3,1,2,3], k = 2))








# 219. Contains Duplicate II
# Easy
# Topics
# Companies
# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

# Example 1:

# Input: nums = [1,2,3,1], k = 3
# Output: true
# Example 2:

# Input: nums = [1,0,1,1], k = 1
# Output: true
# Example 3:

# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false
 

# Constraints:

# 1 <= nums.length <= 105
# -109 <= nums[i] <= 109
# 0 <= k <= 105