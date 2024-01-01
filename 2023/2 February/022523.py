def restoreString(s, indices):
    finalString = ''
    for i in range(len(s)):
        localIndex = indices.index(i)
        finalString += s[localIndex]
    return finalString



print(restoreString("codeleet", [4,5,6,7,0,2,1,3]))
print(restoreString("abc", [0,1,2]))



# 1528. Shuffle String
# Easy
# 2.1K
# 382
# Companies
# You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

# Return the shuffled string.

 

# Example 1:


# Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
# Output: "leetcode"
# Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
# Example 2:

# Input: s = "abc", indices = [0,1,2]
# Output: "abc"
# Explanation: After shuffling, each character remains in its position.
 

# Constraints:

# s.length == indices.length == n
# 1 <= n <= 100
# s consists of only lowercase English letters.
# 0 <= indices[i] < n
# All values of indices are unique.
# Accepted
# 278.8K
# Submissions
# 326.9K
# Acceptance Rate
# 85.3%