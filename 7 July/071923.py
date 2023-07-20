def reverseOnlyLetters(s):
    alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    tempArray = []
    answerString = ""
    for character in s:
        if character in alphabetArray:
            tempArray.append(character)
    tempArray.reverse()
    for character in s:
        if character in alphabetArray:
            answerString += tempArray[0]
            tempArray.pop(0)
        else:
            answerString += character
    return answerString







print(reverseOnlyLetters("ab-cd"))
print(reverseOnlyLetters("a-bC-dEf-ghIj"))
print(reverseOnlyLetters("Test1ng-Leet=code-Q!"))






# 917. Reverse Only Letters
# Easy
# 2K
# 64
# Companies
# Given a string s, reverse the string according to the following rules:

# All the characters that are not English letters remain in the same position.
# All the English letters (lowercase or uppercase) should be reversed.
# Return s after reversing it.

 

# Example 1:

# Input: s = "ab-cd"
# Output: "dc-ba"
# Example 2:

# Input: s = "a-bC-dEf-ghIj"
# Output: "j-Ih-gfE-dCba"
# Example 3:

# Input: s = "Test1ng-Leet=code-Q!"
# Output: "Qedo1ct-eeLg=ntse-T!"
 

# Constraints:

# 1 <= s.length <= 100
# s consists of characters with ASCII values in the range [33, 122].
# s does not contain '\"' or '\\'.
# Accepted
# 172.2K
# Submissions
# 275.3K
# Acceptance Rate
# 62.6%