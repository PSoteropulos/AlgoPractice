def freqAlphabets(s):
    alphabet = ["zeropoint", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    newString = ""
    i = len(s)-1
    while i >= 0:
        if s[i] == "#":
            index = int(s[i-2]+s[i-1])
            newString = newString + alphabet[index]
            i = i-3
        else:
            newString = newString + alphabet[int(s[i])]
            i = i-1
    return newString[::-1]


print(freqAlphabets("10#11#12"))
print(freqAlphabets("1326#"))



# 1309. Decrypt String from Alphabet to Integer Mapping
# Easy
# 1.3K
# 94
# Companies
# You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

# Characters ('a' to 'i') are represented by ('1' to '9') respectively.
# Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
# Return the string formed after mapping.

# The test cases are generated so that a unique mapping will always exist.

 

# Example 1:

# Input: s = "10#11#12"
# Output: "jkab"
# Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
# Example 2:

# Input: s = "1326#"
# Output: "acz"
 

# Constraints:

# 1 <= s.length <= 1000
# s consists of digits and the '#' letter.
# s will be a valid string such that mapping is always possible.
# Accepted
# 105.7K
# Submissions
# 132.6K
# Acceptance Rate
# 79.7%