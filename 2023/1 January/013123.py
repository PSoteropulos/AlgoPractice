def hackerrankInString(s):
    condition = False
    stringChecker = ["k","n","a","r","r","e","k","c","a","h"]
    for char in s:
        if ((len(stringChecker)>0) and (char == stringChecker[(len(stringChecker))-1])):
            stringChecker.pop()
    if (stringChecker == []):
        condition = True
    if (condition == True):
        return "YES"
    elif (condition == False):
        return "NO"


print(hackerrankInString("haacckkerrannkk"))
print(hackerrankInString("haacckkerannkk"))
print(hackerrankInString("hccaakkerrannkk"))
print(hackerrankInString("hereiamstackerrank"))
print(hackerrankInString("hackerworld"))





# We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank. Remeber that a subsequence maintains the order of characters selected from a sequence.

# More formally, let  be the respective indices of h, a, c, k, e, r, r, a, n, k in string . If  is true, then  contains hackerrank.

# For each query, print YES on a new line if the string contains hackerrank, otherwise, print NO.

# Example

# This contains a subsequence of all of the characters in the proper order. Answer YES


# This is missing the second 'r'. Answer NO.


# There is no 'c' after the first occurrence of an 'a', so answer NO.

# Function Description

# Complete the hackerrankInString function in the editor below.

# hackerrankInString has the following parameter(s):

# string s: a string
# Returns

# string: YES or NO
# Input Format

# The first line contains an integer , the number of queries.
# Each of the next  lines contains a single query string .

# Constraints

