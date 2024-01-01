def largestGoodInteger(num):
    goodInts = [""]
    currentChar = ""
    for i in range(len(num)-2):
        if (num[i] == num[i+1] and num[i] == num[i+2]):
            currentChar = num[i] + num[i] + num[i]
            goodInts.append(currentChar)
    goodInts.sort(reverse=True) 
    return goodInts[0]





print(largestGoodInteger("6777133339"))
print(largestGoodInteger("2300019"))
print(largestGoodInteger("42352338"))






# 2264. Largest 3-Same-Digit Number in String
# Easy
# 324
# 19
# Companies
# You are given a string num representing a large integer. An integer is good if it meets the following conditions:

# It is a substring of num with length 3.
# It consists of only one unique digit.
# Return the maximum good integer as a string or an empty string "" if no such integer exists.

# Note:

# A substring is a contiguous sequence of characters within a string.
# There may be leading zeroes in num or a good integer.
 

# Example 1:

# Input: num = "6777133339"
# Output: "777"
# Explanation: There are two distinct good integers: "777" and "333".
# "777" is the largest, so we return "777".
# Example 2: