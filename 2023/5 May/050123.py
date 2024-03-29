def hammingDistance(x, y):
    xString = str(bin(x)).lstrip('0b')
    yString = str(bin(y)).lstrip('0b')
    count = 0
    if len(yString) > len(xString):
        xPadded = xString.rjust(len(yString), '0')
        for i in range(len(yString)):
            if xPadded[i] != yString[i]:
                count += 1
    else:
        yPadded = yString.rjust(len(xString), '0')
        for j in range(len(xString)):
            if yPadded[j] != xString[j]:
                count += 1
    return count


print(hammingDistance(1,4))
print(hammingDistance(3,1))




# 461. Hamming Distance
# Easy
# 3.6K
# 210
# Companies
# The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

# Given two integers x and y, return the Hamming distance between them.

 

# Example 1:

# Input: x = 1, y = 4
# Output: 2
# Explanation:
# 1   (0 0 0 1)
# 4   (0 1 0 0)
#        ↑   ↑
# The above arrows point to positions where the corresponding bits are different.
# Example 2:

# Input: x = 3, y = 1
# Output: 1
 

# Constraints:

# 0 <= x, y <= 231 - 1
# Accepted
# 523.2K
# Submissions
# 697.5K
# Acceptance Rate
# 75.0%