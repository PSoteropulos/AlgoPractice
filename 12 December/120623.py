def longestCommonPrefix(strs):
    actual = ""
    sortedArray = sorted(strs, key=lambda x: len(x))
    for i in range(len(sortedArray[0])):
        valid = True
        for j in range(len(sortedArray)):
            if (sortedArray[j][i] != sortedArray[0][i]):
                valid = False
                break
            elif (valid and j==len(sortedArray)-1):
                actual += sortedArray[0][i]
        if not valid: break
    return actual





print(longestCommonPrefix(["flower","flow","flight"]))
print(longestCommonPrefix(["dog","racecar","car"]))







# 14. Longest Common Prefix
# Attempted
# Easy
# Topics
# Companies
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

 

# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
 

# Constraints:

# 1 <= strs.length <= 200
# 0 <= strs[i].length <= 200
# strs[i] consists of only lowercase English letters.