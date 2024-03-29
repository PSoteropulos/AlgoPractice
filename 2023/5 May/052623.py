# def singleNumber(nums):
#     numsDict = {}
#     for num in nums:
#         if num not in numsDict:
#             numsDict[num] = 1
#         else:
#             numsDict[num] += 1
#     for key,val in numsDict.items():
#         if val == 1:
#             return key


# optimized
def singleNumber(nums):
    unique_nums = set()
    sum_unique = 0
    sum_nums = 0
    for num in nums:
        if num not in unique_nums:
            unique_nums.add(num)
            sum_unique += num
        sum_nums += num
    return 2 * sum_unique - sum_nums



print(singleNumber([2,2,1]))
print(singleNumber([4,1,2,1,2]))
print(singleNumber([1]))




# 136. Single Number
# Easy
# 13.9K
# 534
# Companies
# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only constant extra space.

 

# Example 1:

# Input: nums = [2,2,1]
# Output: 1
# Example 2:

# Input: nums = [4,1,2,1,2]
# Output: 4
# Example 3:

# Input: nums = [1]
# Output: 1
 

# Constraints:

# 1 <= nums.length <= 3 * 104
# -3 * 104 <= nums[i] <= 3 * 104
# Each element in the array appears twice except for one element which appears only once.
# Accepted
# 2.2M
# Submissions
# 3.1M
# Acceptance Rate
# 70.9%