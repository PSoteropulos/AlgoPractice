def sumOfUnique(nums):
    count = 0
    encounteredNums = []
    deductedNums = []
    for num in nums:
        if ((num in encounteredNums) and (num not in deductedNums)):
            count -= num
            deductedNums.append(num)
        elif (num not in encounteredNums):
            count += num
            encounteredNums.append(num)
    return count



print(sumOfUnique([1,2,3,2]))
print(sumOfUnique([1,1,1,1,1]))
print(sumOfUnique([1,2,3,4,5]))




# 1748. Sum of Unique Elements
# Easy
# 1.2K
# 28
# Companies
# You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

# Return the sum of all the unique elements of nums.

 

# Example 1:

# Input: nums = [1,2,3,2]
# Output: 4
# Explanation: The unique elements are [1,3], and the sum is 4.
# Example 2:

# Input: nums = [1,1,1,1,1]
# Output: 0
# Explanation: There are no unique elements, and the sum is 0.
# Example 3:

# Input: nums = [1,2,3,4,5]
# Output: 15
# Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 

# Constraints:

# 1 <= nums.length <= 100
# 1 <= nums[i] <= 100
# Accepted
# 115.5K
# Submissions
# 151.3K
# Acceptance Rate
# 76.3%