def areOccurrencesEqual(s):
    occurences = {}
    bool = True
    count = 0
    for letter in s:
        if letter in occurences:
            occurences[letter] = occurences[letter] + 1
        else:
            occurences = {**occurences, letter: 1 }
    keyList = list(occurences.keys())
    for x, y in occurences.items():
        if keyList[0] == x:
            count = y
        else:
            if y != count:
                bool = False
    return bool





print(areOccurrencesEqual("abacbc"))
print(areOccurrencesEqual("aaabb"))





# 1941. Check if All Characters Have Equal Number of Occurrences
# Easy
# 654
# 17
# Companies
# Given a string s, return true if s is a good string, or false otherwise.

# A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

# Example 1:

# Input: s = "abacbc"
# Output: true
# Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
# Example 2:

# Input: s = "aaabb"
# Output: false
# Explanation: The characters that appear in s are 'a' and 'b'.
# 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 

# Constraints:

# 1 <= s.length <= 1000
# s consists of lowercase English letters.
# Accepted
# 62K
# Submissions
# 80.7K
# Acceptance Rate
# 76.8%