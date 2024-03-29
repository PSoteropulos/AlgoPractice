def numberOfPairs(nums):
    pairs = 0
    running = True
    while running:
        matchesThisLoop = False
        for i in range(len(nums)-1):
            for j in range(i+1, len(nums)):
                if nums[i] == nums[j]:
                    pairs += 1
                    del nums[j]
                    del nums[i]
                    matchesThisLoop = True
                    break
        if matchesThisLoop == False:
            running = False
    return [pairs, len(nums)]



print(numberOfPairs([1,3,2,1,3,2,2]))
print(numberOfPairs([1,1]))
print(numberOfPairs([0]))



# 2341. Maximum Number of Pairs in Array
# Easy
# 518
# 13
# Companies
# You are given a 0-indexed integer array nums. In one operation, you may do the following:

# Choose two integers in nums that are equal.
# Remove both integers from nums, forming a pair.
# The operation is done on nums as many times as possible.

# Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

 

# Example 1:

# Input: nums = [1,3,2,1,3,2,2]
# Output: [3,1]
# Explanation:
# Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
# Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
# Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
# No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.
# Example 2:

# Input: nums = [1,1]
# Output: [1,0]
# Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
# No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.
# Example 3:

# Input: nums = [0]
# Output: [0,1]
# Explanation: No pairs can be formed, and there is 1 number leftover in nums.
 

# Constraints:

# 1 <= nums.length <= 100
# 0 <= nums[i] <= 100
# Accepted
# 48.5K
# Submissions
# 63.9K
# Acceptance Rate
# 75.8%