def reverseWords(s):
    wordArray = s.split(" ")
    reversedWordArray = []
    reversedWordArrayFinal = ""
    for i in range(len(wordArray)):
        loopWord = [*wordArray[i]]
        reversedWord = ""
        for j in range((len(loopWord)-1), -1, -1):
            # print(loopWord[j])
            reversedWord += loopWord[j]
        reversedWordArray.append(reversedWord)
    for x in range(len(reversedWordArray)):
        if (x == len(reversedWordArray)) or (x == 0):
            reversedWordArrayFinal += reversedWordArray[x]
        else:
            reversedWordArrayFinal = reversedWordArrayFinal + " " + reversedWordArray[x]
    return reversedWordArrayFinal



print(reverseWords("Let's take LeetCode contest"))
print(reverseWords("God Ding"))






# 557. Reverse Words in a String III
# Easy
# 4.7K
# 222
# Companies
# Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

# Example 1:

# Input: s = "Let's take LeetCode contest"
# Output: "s'teL ekat edoCteeL tsetnoc"
# Example 2:

# Input: s = "God Ding"
# Output: "doG gniD"
 

# Constraints:

# 1 <= s.length <= 5 * 104
# s contains printable ASCII characters.
# s does not contain any leading or trailing spaces.
# There is at least one word in s.
# All the words in s are separated by a single space.
# Accepted
# 670.2K
# Submissions
# 818.7K
# Acceptance Rate
# 81.9%