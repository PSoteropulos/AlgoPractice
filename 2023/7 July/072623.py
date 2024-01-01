def checkZeroOnes(s):
    maxOne = 0
    maxZero = 0
    currentOne = 0
    currentZero = 0
    if (s[0] == "1"):
        currentOne = 1
        maxOne = 1
    else: 
        currentZero = 1
        maxZero = 1
    for i in range(1,len(s)):
        if (s[i] == "1" and s[i-1] == "1"):
            currentOne += 1
            currentZero = 0
        elif (s[i] == "1" and s[i-1] != "1"):
            currentOne += 1
            currentZero = 0
        elif (s[i] == "0" and s[i-1] == "0"):
            currentZero += 1
            currentOne = 0
        elif (s[i] == "0" and s[i-1] != "0"):
            currentZero += 1
            currentOne = 0
        if (currentOne > maxOne):
            maxOne = currentOne
        elif (currentZero > maxZero) :
            maxZero = currentZero
    if (maxOne > maxZero):
        return True
    else:
        return False




print(checkZeroOnes("1101"))
print(checkZeroOnes("111000"))
print(checkZeroOnes("110100010"))





# 1869. Longer Contiguous Segments of Ones than Zeros
# Easy
# 451
# 10
# Companies
# Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

# For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
# Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

 

# Example 1:

# Input: s = "1101"
# Output: true
# Explanation:
# The longest contiguous segment of 1s has length 2: "1101"
# The longest contiguous segment of 0s has length 1: "1101"
# The segment of 1s is longer, so return true.
# Example 2:

# Input: s = "111000"
# Output: false
# Explanation:
# The longest contiguous segment of 1s has length 3: "111000"
# The longest contiguous segment of 0s has length 3: "111000"
# The segment of 1s is not longer, so return false.
# Example 3:

# Input: s = "110100010"
# Output: false
# Explanation:
# The longest contiguous segment of 1s has length 2: "110100010"
# The longest contiguous segment of 0s has length 3: "110100010"
# The segment of 1s is not longer, so return false.
 

# Constraints:

# 1 <= s.length <= 100
# s[i] is either '0' or '1'.
# Accepted
# 40.1K
# Submissions
# 66.6K
# Acceptance Rate
# 60.3%