def createTargetArray(nums, index):
    targetArray = [ ]
    for i in range(len(nums)):
        targetArray.insert(index[i], nums[i])
    return targetArray




print(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))
print(createTargetArray([1,2,3,4,0], [0,1,2,3,0]))
print(createTargetArray([1], [0]))





# 1389. Create Target Array in the Given Order
# Easy
# 1.5K
# 1.5K
# Companies
# Given two arrays of integers nums and index. Your task is to create target array under the following rules:

# Initially target array is empty.
# From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
# Repeat the previous step until there are no elements to read in nums and index.
# Return the target array.

# It is guaranteed that the insertion operations will be valid.