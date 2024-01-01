def lonelyinteger(a):
    newArray = a
    while (len(newArray) > 1):
        for i in range(0,len(newArray)):
            for j in range((i+1),len(newArray)):
                if (newArray[i] == newArray[j]):
                    del newArray[j]
                    del newArray[i]
                    break
    return newArray[0]


print(lonelyinteger([1,2,3,4,3,2,1]))
print(lonelyinteger([1,1,2]))
print(lonelyinteger([1]))
print(lonelyinteger([0,0,1,2,1]))




# Given an array of integers, where all elements but one occur twice, find the unique element.

# Example

# The unique element is .

# Function Description

# Complete the lonelyinteger function in the editor below.

# lonelyinteger has the following parameter(s):

# int a[n]: an array of integers
# Returns

# int: the element that occurs only once
# Input Format

# The first line contains a single integer, , the number of integers in the array.
# The second line contains  space-separated integers that describe the values in .

# Constraints

# It is guaranteed that  is an odd number and that there is one unique element.
# , where .