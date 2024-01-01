def searchRange(nums, target):
    def binarySearch(left, right, findFirst):
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] > target or (findFirst and nums[mid] == target):
                right = mid - 1
            else:
                left = mid + 1
        return left

    start = binarySearch(0, len(nums) - 1, True)
    if start == len(nums) or nums[start] != target:
        return [-1, -1]
    
    end = binarySearch(0, len(nums) - 1, False) - 1
    return [start, end]








print(searchRange(nums = [5,7,7,8,8,10], target = 8))
print(searchRange(nums = [5,7,7,8,8,10], target = 6))
print(searchRange(nums = [], target = 0))








# 34. Find First and Last Position of Element in Sorted Array
# Medium
# Topics
# Companies
# Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

# If target is not found in the array, return [-1, -1].

# You must write an algorithm with O(log n) runtime complexity.

 

# Example 1:

# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]
# Example 2:

# Input: nums = [5,7,7,8,8,10], target = 6
# Output: [-1,-1]
# Example 3:

# Input: nums = [], target = 0
# Output: [-1,-1]
 

# Constraints:

# 0 <= nums.length <= 105
# -109 <= nums[i] <= 109
# nums is a non-decreasing array.
# -109 <= target <= 109