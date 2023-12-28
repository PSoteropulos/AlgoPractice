def summaryRanges(nums):
    # handle edge cases
    if (len(nums) == 0): return [] 
    if (len(nums) == 1): return [f'{nums[0]}']

    answers = [] # initialize array to store answers
    start = nums[0] # initialize a dynamic starting point, starting at beginning
    for i in range(1, len(nums)): # iterate through each entry in nums, starting at index 1 since start variable is index 0
        if (nums[i]!=nums[i-1]+1): # if current value is not a consecutive number from the previous value
            if (nums[i-1]==start): # if previous value is the same as start its a single number range
                answers.append(f'{start}')
            else: # otherwise its a valid range from start
                answers.append(f'{start}->{nums[i-1]}')
            start = nums[i] # update start to the current value either way since it is the new starting point 
        if (i==len(nums)-1): # special case for last index in array
            if (nums[i]==start): # single number range
                answers.append(f'{nums[i]}')
            else: # otherwise valid range from start to last value
                answers.append(f'{start}->{nums[i]}')
    return answers






print(summaryRanges([0,1,2,4,5,7]))
print(summaryRanges([0,2,3,4,6,8,9]))
print(summaryRanges([]))






# 228. Summary Ranges
# Easy
# Topics
# Companies
# You are given a sorted unique integer array nums.

# A range [a,b] is the set of all integers from a to b (inclusive).

# Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

# Each range [a,b] in the list should be output as:

# "a->b" if a != b
# "a" if a == b
 

# Example 1:

# Input: nums = [0,1,2,4,5,7]
# Output: ["0->2","4->5","7"]
# Explanation: The ranges are:
# [0,2] --> "0->2"
# [4,5] --> "4->5"
# [7,7] --> "7"
# Example 2:

# Input: nums = [0,2,3,4,6,8,9]
# Output: ["0","2->4","6","8->9"]
# Explanation: The ranges are:
# [0,0] --> "0"
# [2,4] --> "2->4"
# [6,6] --> "6"
# [8,9] --> "8->9"
 

# Constraints:

# 0 <= nums.length <= 20
# -231 <= nums[i] <= 231 - 1
# All the values of nums are unique.
# nums is sorted in ascending order.