def findWords(words):
    row1 = "qwertyuiop"
    row2 = "asdfghjkl"
    row3 = "zxcvbnm"
    ansArray = []
    for word in words:
        valid = True
        includedInRow = None
        if word[0].lower() in row1:
            includedInRow = row1
        elif word[0].lower() in row2:
            includedInRow = row2
        elif word[0].lower() in row3:
            includedInRow = row3
        for j in range(len(word)):
            if word[j].lower() not in includedInRow:
                valid = False
        if (valid):
            ansArray.append(word)
    return ansArray





print(findWords(["Hello","Alaska","Dad","Peace"]))
print(findWords(["omk"]))
print(findWords(["adsdf","sfd"]))





# 500. Keyboard Row
# Easy
# 1.4K
# 1.1K
# Companies
# Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

# In the American keyboard:

# the first row consists of the characters "qwertyuiop",
# the second row consists of the characters "asdfghjkl", and
# the third row consists of the characters "zxcvbnm".

 

# Example 1:

# Input: words = ["Hello","Alaska","Dad","Peace"]
# Output: ["Alaska","Dad"]
# Example 2:

# Input: words = ["omk"]
# Output: []
# Example 3:

# Input: words = ["adsdf","sfd"]
# Output: ["adsdf","sfd"]
 

# Constraints:

# 1 <= words.length <= 20
# 1 <= words[i].length <= 100
# words[i] consists of English letters (both lowercase and uppercase). 
# Accepted
# 187.9K
# Submissions
# 269.8K
# Acceptance Rate
# 69.6%