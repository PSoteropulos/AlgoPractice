def pangrams(s):
    def deleteIndex(value):
        del alphabetArray[value]
    alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for i in range(len(s)):
        print(i)
        print(s[i])
        print(alphabetArray)
        if ((alphabetArray.count(s[i].lower())>0) and (s[i] != ' ')):
            foundIndex = alphabetArray.index(s[i].lower())
            deleteIndex(foundIndex)
            print(alphabetArray)
    if len(alphabetArray) == 0:
        return "pangram"
    elif len(alphabetArray) > 0:
        return "not pangram"


print(pangrams("The quick brown fox jumps over the lazy dog"))
print(pangrams("We promptly judged antique ivory buckles for the next prize"))

# A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

# Example

# The string contains all letters in the English alphabet, so return pangram.

# Function Description

# Complete the function pangrams in the editor below. It should return the string pangram if the input string is a pangram. Otherwise, it should return not pangram.

# pangrams has the following parameter(s):

# string s: a string to test
# Returns

# string: either pangram or not pangram
# Input Format

# A single line with string .