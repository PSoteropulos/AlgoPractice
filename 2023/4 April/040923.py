def selfDividingNumbers(left, right):
    answerArray = []
    for i in range(left, right+1):
        numStringArray = [*str(i)]
        valid = True
        for j in range(len(numStringArray)):
            if ((int(numStringArray[j]) == 0) or (i % int(numStringArray[j]) != 0)):
                valid = False
        if (valid == True):
            answerArray.append(i)
    return answerArray



print(selfDividingNumbers(1, 22))
print(selfDividingNumbers(47, 85))



# 728. Self Dividing Numbers
# Easy
# 1.5K
# 359
# Companies
# A self-dividing number is a number that is divisible by every digit it contains.

# For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
# A self-dividing number is not allowed to contain the digit zero.

# Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

 

# Example 1:

# Input: left = 1, right = 22
# Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
# Example 2:

# Input: left = 47, right = 85
# Output: [48,55,66,77]
 

# Constraints:

# 1 <= left <= right <= 104
# Accepted
# 203.5K
# Submissions
# 261.3K
# Acceptance Rate
# 77.9%