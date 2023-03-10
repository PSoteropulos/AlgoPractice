def arrayStringsAreEqual(word1, word2):
    word1String = ""
    word2String = ""
    for i in range(len(word1)):
        word1String = word1String + word1[i]
    
    for j in range (len(word2)):
        word2String = word2String + word2[j]
    
    if word1String==word2String:
        return True
    else:
        return False


print(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
print(arrayStringsAreEqual(["a", "cb"], ["ab", "c"]))
print(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]))





# 1662. Check If Two String Arrays are Equivalent
# Easy
# 2.1K
# 172
# Companies
# Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

# A string is represented by an array if the array elements concatenated in order forms the string.

 

# Example 1:

# Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
# Output: true
# Explanation:
# word1 represents string "ab" + "c" -> "abc"
# word2 represents string "a" + "bc" -> "abc"
# The strings are the same, so return true.
# Example 2:

# Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
# Output: false
# Example 3:

# Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
# Output: true
 

# Constraints:

# 1 <= word1.length, word2.length <= 103
# 1 <= word1[i].length, word2[i].length <= 103
# 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
# word1[i] and word2[i] consist of lowercase letters.
# Accepted
# 263.3K
# Submissions
# 315.6K
# Acceptance Rate
# 83.4%