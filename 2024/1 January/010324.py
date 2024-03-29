def findShortestSubArray(nums):
    count, first_occurrence, last_occurrence = {}, {}, {}
    for i, num in enumerate(nums):
        count[num] = count.get(num, 0) + 1
        if num not in first_occurrence:
            first_occurrence[num] = i
        last_occurrence[num] = i
    degree = max(count.values())
    max_freq_elements = [num for num, freq in count.items() if freq == degree]
    min_length = float('inf')
    for num in max_freq_elements:
        min_length = min(min_length, last_occurrence[num] - first_occurrence[num] + 1)
    return min_length





print(findShortestSubArray([1,2,2,3,1]))
print(findShortestSubArray([1,2,2,3,1,4,2]))







# 697. Degree of an Array
# Attempted
# Easy
# Topics
# Companies
# Hint
# Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

# Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

# Example 1:

# Input: nums = [1,2,2,3,1]
# Output: 2
# Explanation: 
# The input array has a degree of 2 because both elements 1 and 2 appear twice.
# Of the subarrays that have the same degree:
# [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
# The shortest length is 2. So return 2.
# Example 2:

# Input: nums = [1,2,2,3,1,4,2]
# Output: 6
# Explanation: 
# The degree is 3 because the element 2 is repeated 3 times.
# So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

# Constraints:

# nums.length will be between 1 and 50,000.
# nums[i] will be an integer between 0 and 49,999.