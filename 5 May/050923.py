def twoOutOfThree(nums1, nums2, nums3):
    answerArray = []
    for num1 in nums1:
        if (num1 in nums2 or num1 in nums3) and (num1 not in answerArray):
            answerArray.append(num1)
    for num2 in nums2:
        if (num2 in nums1 or num2 in nums3) and (num2 not in answerArray):
            answerArray.append(num2)
    for num3 in nums3:
        if (num3 in nums1 or num3 in nums2) and (num3 not in answerArray):
            answerArray.append(num3)
    return answerArray





# print(twoOutOfThree([1,1,3,2], [2,3], [3]))
# print(twoOutOfThree([3,1], [2,3], [1,2]))
# print(twoOutOfThree([1,2,2], [4,3,3], [5]))
print(twoOutOfThree([2,15,10,11,14,12,14,11,9,1],[8,9,13,2,11,8], [13,5,15,7,12,7,8,3,13,15]))



# 2032. Two Out of Three
# Easy
# 603
# 35
# Companies
# Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 

# Example 1:

# Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
# Output: [3,2]
# Explanation: The values that are present in at least two arrays are:
# - 3, in all three arrays.
# - 2, in nums1 and nums2.
# Example 2:

# Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
# Output: [2,3,1]
# Explanation: The values that are present in at least two arrays are:
# - 2, in nums2 and nums3.
# - 3, in nums1 and nums2.
# - 1, in nums1 and nums3.
# Example 3:

# Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
# Output: []
# Explanation: No value is present in at least two arrays.
 

# Constraints:

# 1 <= nums1.length, nums2.length, nums3.length <= 100
# 1 <= nums1[i], nums2[j], nums3[k] <= 100
# Accepted
# 47.7K
# Submissions
# 64.8K
# Acceptance Rate
# 73.6%