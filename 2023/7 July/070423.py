def stringMatching(words):
    ansArray = []
    for word1 in words:
        for word2 in words:
            if word1 != word2 and word2 in word1:
                ansArray.append(word2)
    return list(set(ansArray))





print(stringMatching(["mass","as","hero","superhero"]))
print(stringMatching(["leetcode","et","code"]))
print(stringMatching(["blue","green","bu"]))
print(stringMatching(["leetcoder","leetcode","od","hamlet","am"]))






# 1408. String Matching in an Array
# Easy
# 792
# 84
# Companies
# Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

# A substring is a contiguous sequence of characters within a string

 

# Example 1:

# Input: words = ["mass","as","hero","superhero"]
# Output: ["as","hero"]
# Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
# ["hero","as"] is also a valid answer.
# Example 2:

# Input: words = ["leetcode","et","code"]
# Output: ["et","code"]
# Explanation: "et", "code" are substring of "leetcode".
# Example 3:

# Input: words = ["blue","green","bu"]
# Output: []
# Explanation: No string of words is substring of another string.
 

# Constraints:

# 1 <= words.length <= 100
# 1 <= words[i].length <= 30
# words[i] contains only lowercase English letters.
# All the strings of words are unique.
# Accepted
# 72.7K
# Submissions
# 114.2K
# Acceptance Rate
# 63.6%