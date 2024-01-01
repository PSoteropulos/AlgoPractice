def gcdOfStrings(str1, str2):
    longerString = str1 if len(str1) >= len(str2) else str2
    shorterString = str1 if len(str1) < len(str2) else str2
    stringWeCheck = shorterString
    while (len(stringWeCheck) > 0):
        if (len(longerString) % len(stringWeCheck) == 0 and len(shorterString) % len(stringWeCheck) == 0):
            valid = True
            for i in range(0, len(longerString), len(stringWeCheck)):
                if (longerString[i:i + len(stringWeCheck)] != stringWeCheck):
                    valid = False
                    break
            if (valid):
                for i in range(0, len(shorterString), len(stringWeCheck)):
                    if (shorterString[i:i + len(stringWeCheck)] != stringWeCheck):
                        valid = False
                        break
            if (valid):
                return stringWeCheck
        stringWeCheck = stringWeCheck[:-1]
    return ""







print(gcdOfStrings(str1 = "ABCABC", str2 = "ABC"))
print(gcdOfStrings(str1 = "ABABAB", str2 = "ABAB"))
print(gcdOfStrings(str1 = "LEET", str2 = "CODE"))








# 1071. Greatest Common Divisor of Strings
# Easy
# Topics
# Companies
# Hint
# For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

# Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

# Example 1:

# Input: str1 = "ABCABC", str2 = "ABC"
# Output: "ABC"
# Example 2:

# Input: str1 = "ABABAB", str2 = "ABAB"
# Output: "AB"
# Example 3:

# Input: str1 = "LEET", str2 = "CODE"
# Output: ""
 

# Constraints:

# 1 <= str1.length, str2.length <= 1000
# str1 and str2 consist of English uppercase letters.