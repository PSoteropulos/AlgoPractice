def reformat(s):
    digits = []
    letters = []
    newString = ""
    for char in s:
        if (char.isalpha()):
            letters.append(char)
        else:
            digits.append(char)
    if abs(len(digits) - len(letters))==1 or abs(len(digits) - len(letters))==0:
        if len(digits)>=len(letters):
            for i in range(len(digits)):
                newString += digits[i]
                if i < len(letters):
                    newString += letters[i]
        else:
            for i in range(len(letters)):
                newString += letters[i]
                if i < len(digits):
                    newString += digits[i]
    return newString






print(reformat("a0b1c2"))
print(reformat("leetcode"))
print(reformat("1229857369"))
print(reformat("covid2019"))




# 1417. Reformat The String
# Easy
# Topics
# Companies
# Hint
# You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

# You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

# Return the reformatted string or return an empty string if it is impossible to reformat the string.

 

# Example 1:

# Input: s = "a0b1c2"
# Output: "0a1b2c"
# Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.
# Example 2:

# Input: s = "leetcode"
# Output: ""
# Explanation: "leetcode" has only characters so we cannot separate them by digits.
# Example 3:

# Input: s = "1229857369"
# Output: ""
# Explanation: "1229857369" has only digits so we cannot separate them by characters.
 

# Constraints:

# 1 <= s.length <= 500
# s consists of only lowercase English letters and/or digits.
# Accepted
# 53.2K
# Submissions
# 99.4K
# Acceptance Rate
# 53.6%