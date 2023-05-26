# def intersection(nums1, nums2):
#     ansArray = []
#     if len(nums1)>len(nums2):
#         for num in nums1:
#             if num in nums2 and num not in ansArray:
#                 ansArray.append(num)
#     else:
#         for num in nums2:
#             if num in nums1 and num not in ansArray:
#                 ansArray.append(num)
#     return ansArray


# optimized with sets
def intersection(nums1, nums2):
    set1 = set(nums1)
    ansArray = []
    for num in nums2:
        if num in set1:
            ansArray.append(num)
            set1.remove(num)
    return ansArray



print(intersection([1,2,2,1], [2,2]))
print(intersection([4,9,5], [9,4,9,8,4]))






# 349. Intersection of Two Arrays
# Easy
# 4.7K
# 2.1K
# Companies
# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

# Example 1:

# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2]
# Example 2:

# Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# Output: [9,4]
# Explanation: [4,9] is also accepted.
 

# Constraints:

# 1 <= nums1.length, nums2.length <= 1000
# 0 <= nums1[i], nums2[i] <= 1000
# Accepted
# 855.9K
# Submissions
# 1.2M
# Acceptance Rate
# 71.1%