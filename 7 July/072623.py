def checkZeroOnes(s):
    pass





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