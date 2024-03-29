def repeatedNTimes(nums):
    for i in range(len(nums)-1):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]



print(repeatedNTimes([1,2,3,3]))
print(repeatedNTimes([2,1,2,5,3,2]))
print(repeatedNTimes([5,1,5,2,5,3,5,4]))


# 961. N-Repeated Element in Size 2N Array
# Easy
# 1.2K
# 318
# Companies
# You are given an integer array nums with the following properties:

# nums.length == 2 * n.
# nums contains n + 1 unique elements.
# Exactly one element of nums is repeated n times.
# Return the element that is repeated n times.

 

# Example 1:

# Input: nums = [1,2,3,3]
# Output: 3
# Example 2:

# Input: nums = [2,1,2,5,3,2]
# Output: 2
# Example 3:

# Input: nums = [5,1,5,2,5,3,5,4]
# Output: 5
 

# Constraints:

# 2 <= n <= 5000
# nums.length == 2 * n
# 0 <= nums[i] <= 104
# nums contains n + 1 unique elements and one of them is repeated exactly n times.
# Accepted
# 205.1K
# Submissions
# 269.6K
# Acceptance Rate
# 76.1%