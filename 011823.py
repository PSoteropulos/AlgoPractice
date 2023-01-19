def utopianTree(n):
    treeHeight = 1
    for cycle in range(1, n+1):
        if (cycle % 2 == 0):
            treeHeight += 1
        elif (cycle % 2 == 1):
            treeHeight *= 2
    return treeHeight


print(utopianTree(5))
print(utopianTree(0))
print(utopianTree(1))
print(utopianTree(4))


# The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

# A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

# For example, if the number of growth cycles is , the calculations are as follows:

# Period  Height
# 0          1
# 1          2
# 2          3
# 3          6
# 4          7
# 5          14
# Function Description

# Complete the utopianTree function in the editor below.

# utopianTree has the following parameter(s):

# int n: the number of growth cycles to simulate
# Returns

# int: the height of the tree after the given number of cycles
# Input Format

# The first line contains an integer, , the number of test cases.
#  subsequent lines each contain an integer, , the number of cycles for that test case.