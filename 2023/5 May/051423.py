def countPrefixes(words, s):
    count = 0
    for word in words:
        localBool = True
        if len(word) <= len(s):
            for j in range(len(word)):
                if word[j] != s[j]:
                    localBool = False
                    break
            if localBool == True:
                count += 1
    return count





print(countPrefixes(["a","b","c","ab","bc","abc"], "abc"))
print(countPrefixes(["a","a"], "aa"))







# 2255. Count Prefixes of a Given String
# Easy
# 422
# 15
# Companies
# You are given a string array words and a string s, where words[i] and s comprise only of lowercase English letters.

# Return the number of strings in words that are a prefix of s.

# A prefix of a string is a substring that occurs at the beginning of the string. A substring is a contiguous sequence of characters within a string.

 

# Example 1:

# Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
# Output: 3
# Explanation:
# The strings in words which are a prefix of s = "abc" are:
# "a", "ab", and "abc".
# Thus the number of strings in words which are a prefix of s is 3.
# Example 2:

# Input: words = ["a","a"], s = "aa"
# Output: 2
# Explanation:
# Both of the strings are a prefix of s. 
# Note that the same string can occur multiple times in words, and it should be counted each time.
 

# Constraints:

# 1 <= words.length <= 1000
# 1 <= words[i].length, s.length <= 10
# words[i] and s consist of lowercase English letters only.
# Accepted
# 41.6K
# Submissions
# 57.3K
# Acceptance Rate
# 72.5%