def alternatingCharacters(s):
    augmentedString = [s[0]]
    deletions = 0
    for i in range(1, len(s)):
        if (s[i] != s[i-1]):
            augmentedString.append(s[i])
        else:
            deletions += 1
    return deletions


print(alternatingCharacters("AABAAB"))
print(alternatingCharacters("AAAA"))
print(alternatingCharacters("BBBBB"))
print(alternatingCharacters("ABABABAB"))
print(alternatingCharacters("BABABA"))
print(alternatingCharacters("AAABBB"))





# You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

# Your task is to find the minimum number of required deletions.

# Example

# Remove an  at positions  and  to make  in  deletions.

# Function Description

# Complete the alternatingCharacters function in the editor below.

# alternatingCharacters has the following parameter(s):

# string s: a string
# Returns

# int: the minimum number of deletions required
# Input Format

# The first line contains an integer , the number of queries.
# The next  lines each contain a string  to analyze.