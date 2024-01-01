def findSpecialInteger(arr):
    arr.sort()
    average = len(arr)/4
    count = 1
    if len(arr) == 1:
        return arr[0]
    for i in range(1, len(arr)):
        if (arr[i]==arr[i-1]):
            count += 1
        else :
            count =1
        if (count > average):
            return arr[i]






print(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
print(findSpecialInteger([1,1]))






# 1287. Element Appearing More Than 25% In Sorted Array
# Easy
# 868
# 44
# Companies
# Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

# Example 1:

# Input: arr = [1,2,2,6,6,6,6,7,10]
# Output: 6
# Example 2:

# Input: arr = [1,1]
# Output: 1
 

# Constraints:

# 1 <= arr.length <= 104
# 0 <= arr[i] <= 105
# Accepted
# 81.4K
# Submissions
# 137.6K
# Acceptance Rate
# 59.2%