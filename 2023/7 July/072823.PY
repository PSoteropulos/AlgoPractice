def countQuadruplets(s):
    count = 0
    for i in range(len(s)-3):
        for j in range(i+1,len(s)-2):
            for k in range(j+1,len(s)-1):
                for l in range(k+1,len(s)):
                    if(s[i]+s[j]+s[k]==s[l]):
                        count += 1
    return count






print(countQuadruplets([1,2,3,6]))
print(countQuadruplets([3,3,6,4,5]))
print(countQuadruplets([1,1,1,3,5]))





# 387. First Unique Character in a String
# Easy
# 8K
# 257
# Companies
# Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

# Example 1:

# Input: s = "leetcode"
# Output: 0
# Example 2:

# Input: s = "loveleetcode"
# Output: 2
# Example 3:

# Input: s = "aabb"
# Output: -1
 

# Constraints:

# 1 <= s.length <= 105
# s consists of only lowercase English letters.
# Accepted
# 1.4M
# Submissions
# 2.4M
# Acceptance Rate
# 59.9%