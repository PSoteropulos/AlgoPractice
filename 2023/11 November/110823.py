def duplicateZeros(arr):
    possible_dups = 0
    new_length = len(arr) - 1
    i = 0
    while i <= new_length - possible_dups:
        if arr[i] == 0:
            if i == new_length - possible_dups:
                arr[new_length] = 0
                new_length -= 1
                break
            possible_dups += 1
        i += 1
    for i in range(new_length - possible_dups, -1, -1):
        if arr[i] == 0:
            arr[i + possible_dups] = 0
            possible_dups -= 1
            arr[i + possible_dups] = 0
        else:
            arr[i + possible_dups] = arr[i]







# print(duplicateZeros([1,0,2,3,0,4,5,0]))
# print(duplicateZeros([1,2,3]))
print(duplicateZeros([0,1,7,6,0,2,0,7]))






# 1089. Duplicate Zeros
# Easy
# Topics
# Companies
# Hint
# Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

# Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

# Example 1:

# Input: arr = [1,0,2,3,0,4,5,0]
# Output: [1,0,0,2,3,0,0,4]
# Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
# Example 2:

# Input: arr = [1,2,3]
# Output: [1,2,3]
# Explanation: After calling your function, the input array is modified to: [1,2,3]
 

# Constraints:

# 1 <= arr.length <= 104
# 0 <= arr[i] <= 9
# Accepted
# 383.9K
# Submissions
# 743.2K
# Acceptance Rate
# 51.7%