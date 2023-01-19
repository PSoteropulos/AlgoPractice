def pickingNumbers(a):
    maxLength = 0
    for i in a:
        tempArrayPlus = [i]
        for j in a:
            if ((i == j) or (j == (i+1))):
                tempArrayPlus.append(j)
            if (len(tempArrayPlus)-1 > maxLength):
                maxLength = len(tempArrayPlus)-1
        tempArrayMinus = [i]
        for j in a:
            if ((i == j) or (j == (i-1))):
                tempArrayMinus.append(j)
            if (len(tempArrayMinus)-1 > maxLength):
                maxLength = len(tempArrayMinus)-1
    return maxLength

print(pickingNumbers([4,6,5,3,3,1]))


# Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to .

# Example


# There are two subarrays meeting the criterion:  and . The maximum length subarray has  elements.

# Function Description

# Complete the pickingNumbers function in the editor below.

# pickingNumbers has the following parameter(s):

# int a[n]: an array of integers
# Returns

# int: the length of the longest subarray that meets the criterion
# Input Format

# The first line contains a single integer , the size of the array .
# The second line contains  space-separated integers, each an .

