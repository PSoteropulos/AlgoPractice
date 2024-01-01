def countCharacters(words, chars):
    count = 0
    for i in range(len(words)):
        copy = [*chars]
        allGood = True
        for j in range(len(words[i])):
            if words[i][j] in copy:
                copy.pop(copy.index(words[i][j]))
            else:
                allGood = False
        if (allGood):
            count += len(words[i])
    return count





print(countCharacters(words = ["cat","bt","hat","tree"], chars = "atach"))
print(countCharacters(words = ["hello","world","leetcode"], chars = "welldonehoneyr"))






# 1160. Find Words That Can Be Formed by Characters
# Easy
# Topics
# Companies
# Hint
# You are given an array of strings words and a string chars.

# A string is good if it can be formed by characters from chars (each character can only be used once).

# Return the sum of lengths of all good strings in words.

 

# Example 1:

# Input: words = ["cat","bt","hat","tree"], chars = "atach"
# Output: 6
# Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
# Example 2:

# Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
# Output: 10
# Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
 

# Constraints:

# 1 <= words.length <= 1000
# 1 <= words[i].length, chars.length <= 100
# words[i] and chars consist of lowercase English letters.
# Accepted
# 155.3K
# Submissions
# 231.3K
# Acceptance Rate
# 67.1%