def toGoatLatin(sentence):
    splitSentence = sentence.split(" ")
    changedArray = []
    vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ]
    for i in range(len(splitSentence)):
        addition = "a"*(i+1)
        if splitSentence[i][0] in vowels:
            changedArray.append(splitSentence[i] + "ma" + addition)
        else:
            letter = splitSentence[i][0]
            wordSplit = [*splitSentence[i]]
            wordSplit.pop(0)
            changedArray.append("".join(wordSplit) + letter + "ma" + addition)
    return " ".join(changedArray)



print(toGoatLatin("I speak Goat Latin"))
print(toGoatLatin("The quick brown fox jumped over the lazy dog"))



# 824. Goat Latin
# Easy
# 812
# 1.2K
# Companies
# You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

# We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

# If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
# For example, the word "apple" becomes "applema".
# If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
# For example, the word "goat" becomes "oatgma".
# Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
# For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
# Return the final sentence representing the conversion from sentence to Goat Latin.

 

# Example 1:

# Input: sentence = "I speak Goat Latin"
# Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
# Example 2:

# Input: sentence = "The quick brown fox jumped over the lazy dog"
# Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 

# Constraints:

# 1 <= sentence.length <= 150
# sentence consists of English letters and spaces.
# sentence has no leading or trailing spaces.
# All the words in sentence are separated by a single space.
# Accepted
# 158.5K
# Submissions
# 233.5K
# Acceptance Rate
# 67.9%