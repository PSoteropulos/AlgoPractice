def arithmeticTriplets(nums, diff):
    totalTriplets = 0
    for i in range(len(nums)-1):
        print("i:", i, "nums[i]:", nums[i])
        possibleTriplets = 0
        secondIndex = 0
        for j in range(i+1, len(nums)):
            print("j:", j, "nums[j]:", nums[j])
            if nums[i] + diff == nums[j]:
                possibleTriplets += 1
                secondIndex = j
        for k in range(secondIndex, len(nums)):
            print("k:", k, "nums[k]:", nums[k])
            if (nums[secondIndex] + diff == nums[k]) and (possibleTriplets==1):
                totalTriplets += 1
    return totalTriplets



print(arithmeticTriplets([0,1,4,6,7,10], 3))
print(arithmeticTriplets([4,5,6,7,8,9], 2))




# 2367. Number of Arithmetic Triplets
# Easy
# 774
# 33
# Companies
# You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

# i < j < k,
# nums[j] - nums[i] == diff, and
# nums[k] - nums[j] == diff.
# Return the number of unique arithmetic triplets.

 

# Example 1:

# Input: nums = [0,1,4,6,7,10], diff = 3
# Output: 2
# Explanation:
# (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
# (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 
# Example 2:

# Input: nums = [4,5,6,7,8,9], diff = 2
# Output: 2
# Explanation:
# (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
# (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.
 

# Constraints:

# 3 <= nums.length <= 200
# 0 <= nums[i] <= 200
# 1 <= diff <= 50
# nums is strictly increasing.