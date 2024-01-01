def cutTheSticks(arr):
    sortedArray = sorted(arr)
    manipulatedArray = sortedArray
    whatsLeftArray = [len(arr)]
    while (len(manipulatedArray) >1):
        tempArray = []
        for num in manipulatedArray:
            newVal = num - manipulatedArray[0]
            if (newVal >= 1):
                tempArray.append(newVal)
        else:
            manipulatedArray = tempArray
            if (len(tempArray) > 0):
                whatsLeftArray.append(len(tempArray))
    return whatsLeftArray


print(cutTheSticks([1,2,3]))
print(cutTheSticks([5,4,4,2,2,8]))
print(cutTheSticks([1,2,3,4,3,3,2,1]))
print(cutTheSticks([8,8,14,10,3,5,14,12]))









# You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

# Given the lengths of  sticks, print the number of sticks that are left before each iteration until there are none left.

# Example

# The shortest stick length is , so cut that length from the longer two and discard the pieces of length . Now the lengths are . Again, the shortest stick is of length , so cut that amount from the longer stick and discard those pieces. There is only one stick left, , so discard that stick. The number of sticks at each iteration are .

# Function Description

# Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number of sticks before each cut operation is performed.

# cutTheSticks has the following parameter(s):

# int arr[n]: the lengths of each stick
# Returns

# int[]: the number of sticks after each iteration
# Input Format

# The first line contains a single integer , the size of .
# The next line contains  space-separated integers, each an , where each value represents the length of the  stick.