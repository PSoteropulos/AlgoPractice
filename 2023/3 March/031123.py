def uniqueMorseRepresentations(words):
    morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    letterAlphabet =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    transformationArray = []
    for i in range (len(words)):
        wordArray = [*words[i]]
        concatMorseWord = ""
        for j in range(len(wordArray)):
            letterIndex = letterAlphabet.index(wordArray[j].upper())
            concatMorseWord += morseAlphabet[letterIndex]
        if concatMorseWord not in transformationArray:
            transformationArray.append(concatMorseWord)
    return len(transformationArray)



print(uniqueMorseRepresentations(["gin","zen","gig","msg"]))
print(uniqueMorseRepresentations(["a"]))



# 804. Unique Morse Code Words
# Easy
# 2.2K
# 1.4K
# Companies
# International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

# 'a' maps to ".-",
# 'b' maps to "-...",
# 'c' maps to "-.-.", and so on.
# For convenience, the full table for the 26 letters of the English alphabet is given below:

# [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
# Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

# For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
# Return the number of different transformations among all words we have.

 

# Example 1:

# Input: words = ["gin","zen","gig","msg"]
# Output: 2
# Explanation: The transformation of each word is:
# "gin" -> "--...-."
# "zen" -> "--...-."
# "gig" -> "--...--."
# "msg" -> "--...--."
# There are 2 different transformations: "--...-." and "--...--.".
# Example 2:

# Input: words = ["a"]
# Output: 1
 

# Constraints:

# 1 <= words.length <= 100
# 1 <= words[i].length <= 12
# words[i] consists of lowercase English letters.
# Accepted
# 310.1K
# Submissions
# 375.3K
# Acceptance Rate
# 82.6%