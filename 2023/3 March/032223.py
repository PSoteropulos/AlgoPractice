def flipAndInvertImage(image):
    finalFlippedArray = []
    for i in range(len(image)):
        image[i].reverse()
        doubleFlippedLocalArray = []
        for j in range(len(image)):
            if image[i][j] == 1:
                doubleFlippedLocalArray.append(0)
            else :
                doubleFlippedLocalArray.append(1)
        finalFlippedArray.append(doubleFlippedLocalArray)
    return finalFlippedArray




print(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
print(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))



# 832. Flipping an Image
# Easy
# 2.9K
# 219
# Companies
# Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

# To flip an image horizontally means that each row of the image is reversed.

# For example, flipping [1,1,0] horizontally results in [0,1,1].
# To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

# For example, inverting [0,1,1] results in [1,0,0].
 

# Example 1:

# Input: image = [[1,1,0],[1,0,1],[0,0,0]]
# Output: [[1,0,0],[0,1,0],[1,1,1]]
# Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
# Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
# Example 2:

# Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
# Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
# Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
# Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

# Constraints:

# n == image.length
# n == image[i].length
# 1 <= n <= 20
# images[i][j] is either 0 or 1.
# Accepted
# 353.6K
# Submissions
# 437.8K
# Acceptance Rate
# 80.8%