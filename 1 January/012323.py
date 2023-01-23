def equalizeArray(arr):
    minDeletions = len(arr) - 1
    for i in range(0, len(arr)):
        tempMatchArray = [arr[i]]
        for j in range((i+1),len(arr)):
            if (arr[i]==arr[j]):
                tempMatchArray.append(arr[j])
        if ((len(arr) - len(tempMatchArray)) < minDeletions):
            minDeletions = (len(arr) - len(tempMatchArray))
    return minDeletions



print(equalizeArray([1,2,2,3]))
print(equalizeArray([3,3,2,1,3]))




# Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

# Example


# Delete the  elements  and  leaving . If both twos plus either the  or the  are deleted, it takes  deletions to leave either  or . The minimum number of deletions is .

# Function Description

# Complete the equalizeArray function in the editor below.

# equalizeArray has the following parameter(s):

# int arr[n]: an array of integers
# Returns

# int: the minimum number of deletions required
# Input Format

# The first line contains an integer , the number of elements in .
# The next line contains  space-separated integers .