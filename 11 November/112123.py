def convertToBase7(num):
    negative = False
    if num < 0:
        negative = True
        num = -num
    base7 = ""
    while num > 0:
        base7 = str(num % 7) + base7
        num //= 7
    if base7 == "":
        base7 = "0"
    elif negative:
        base7 = "-" + base7
    return base7








print(convertToBase7(100))
print(convertToBase7(-7))







# 504. Base 7
# Easy
# Topics
# Companies
# Given an integer num, return a string of its base 7 representation.

 

# Example 1:

# Input: num = 100
# Output: "202"
# Example 2:

# Input: num = -7
# Output: "-10"
 

# Constraints:

# -107 <= num <= 107