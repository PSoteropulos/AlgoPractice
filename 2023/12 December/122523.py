def commonChars(words):
    common_chars = list(words[0])
    for word in words[1:]:
        temp_common_chars = []
        for char in common_chars:
            if char in word:
                temp_common_chars.append(char)
                word = word.replace(char, '', 1)
        common_chars = temp_common_chars
    return common_chars





print(commonChars(["bella","label","roller"]))
print(commonChars(["cool","lock","cook"]))






# 1002. Find Common Characters
# Easy
# Topics
# Companies
# Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

 

# Example 1:

# Input: words = ["bella","label","roller"]
# Output: ["e","l","l"]
# Example 2:

# Input: words = ["cool","lock","cook"]
# Output: ["c","o"]
 

# Constraints:

# 1 <= words.length <= 100
# 1 <= words[i].length <= 100
# words[i] consists of lowercase English letters.