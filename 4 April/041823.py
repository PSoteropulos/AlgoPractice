import math

def sumZero(n):
    answerArray = []
    if (n%2==1):
        for i in range(1,(math.floor(n/2) + 1)):
            answerArray.append(i)
            answerArray.append(-i)
        answerArray.append(0)
    elif (n%2 == 0):
        for j in range(1,(math.floor(n/2) + 1)):
            answerArray.append(j)
            answerArray.append(-j)
    return answerArray




print(sumZero(5))
print(sumZero(3))
print(sumZero(1))



# 1304. Find N Unique Integers Sum up to Zero
# Easy
# 1.7K
# 548
# Companies
# Given an integer n, return any array containing n unique integers such that they add up to 0.

 

# Example 1:

# Input: n = 5
# Output: [-7,-1,1,3,4]
# Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
# Example 2:

# Input: n = 3
# Output: [-1,0,1]
# Example 3:

# Input: n = 1
# Output: [0]
 

# Constraints:

# 1 <= n <= 1000
# Accepted
# 183.2K
# Submissions
# 238.2K
# Acceptance Rate
# 76.9%