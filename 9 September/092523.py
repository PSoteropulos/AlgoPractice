def detectCapitalUse(word):
    first = word[0].isupper()
    restUpper = True
    restLower = True
    for i in range(1,len(word)):
        if word[i].isupper():
            restLower = False
        if word[i].islower():
            restUpper = False
    return True if (first and restUpper) or (first and restLower) or (not first and restLower) else False







print(detectCapitalUse("USA"))
print(detectCapitalUse("FlaG"))







# 520. Detect Capital
# Easy
# Topics
# Companies
# We define the usage of capitals in a word to be right when one of the following cases holds:

# All letters in this word are capitals, like "USA".
# All letters in this word are not capitals, like "leetcode".
# Only the first letter in this word is capital, like "Google".
# Given a string word, return true if the usage of capitals in it is right.

 

# Example 1:

# Input: word = "USA"
# Output: true
# Example 2:

# Input: word = "FlaG"
# Output: false
 

# Constraints:

# 1 <= word.length <= 100
# word consists of lowercase and uppercase English letters.
# Accepted
# 403.9K
# Submissions
# 712K
# Acceptance Rate
# 56.7%