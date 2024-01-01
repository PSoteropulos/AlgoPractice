def mostFrequentEven(nums):
    nums.sort(reverse=True)
    object = {}
    maxOccurences = 0
    most = -1
    for i in range(len(nums)):
        if (nums[i]%2==0) and (f'{nums[i]}' in object):
            object[f'{nums[i]}'] += 1
        elif nums[i]%2==0:
            object[f'{nums[i]}'] = 1
        if (f'{nums[i]}' in object) and (object[f'{nums[i]}'] >= maxOccurences):
            maxOccurences = object[f'{nums[i]}']
            most = nums[i]
    return most





print(mostFrequentEven([0,1,2,2,4,4,1]))
print(mostFrequentEven([4,4,4,9,2,4]))
print(mostFrequentEven([29,47,21,41,13,37,25,7]))





# 2404. Most Frequent Even Element
# Easy
# Topics
# Companies
# Hint
# Given an integer array nums, return the most frequent even element.

# If there is a tie, return the smallest one. If there is no such element, return -1.

 

# Example 1:

# Input: nums = [0,1,2,2,4,4,1]
# Output: 2
# Explanation:
# The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
# We return the smallest one, which is 2.
# Example 2:

# Input: nums = [4,4,4,9,2,4]
# Output: 4
# Explanation: 4 is the even element appears the most.
# Example 3:

# Input: nums = [29,47,21,41,13,37,25,7]
# Output: -1
# Explanation: There is no even element.
 

# Constraints:

# 1 <= nums.length <= 2000
# 0 <= nums[i] <= 105
# Accepted
# 60.6K
# Submissions
# 120.4K
# Acceptance Rate
# 50.3%