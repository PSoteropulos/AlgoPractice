def secondHighest(s):
    numberSet = set()
    for letter in s:
        if ((letter.isalpha() == False) and (letter not in numberSet)):
            numberSet.add(int(letter))
    numbers = sorted([*numberSet])
    if ((len(numbers)>1)):
        return numbers[len(numbers)-2]
    return -1







print(secondHighest("dfa12321afd"))
print(secondHighest("abc1111"))







# Code

# Testcase
# Test Result
# Test Result

# 1796. Second Largest Digit in a String
# Easy
# Topics
# Companies
# Hint
# Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

# An alphanumeric string is a string consisting of lowercase English letters and digits.

 

# Example 1:

# Input: s = "dfa12321afd"
# Output: 2
# Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
# Example 2:

# Input: s = "abc1111"
# Output: -1
# Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 

# Constraints:

# 1 <= s.length <= 500
# s consists of only lowercase English letters and/or digits.