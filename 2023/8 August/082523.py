def largestOddNumber(num):
    currentMax = ""
    startedOdd = False
    for i in range(len(num)-1, -1, -1):
        if ((int(num[i])%2 != 0) and (startedOdd == False)):
            currentMax += num[i]
            startedOdd = True
        elif (startedOdd):
            currentMax += num[i]
    answerArray = [*currentMax]
    answerArray.reverse()
    return "".join(answerArray)





print(largestOddNumber("52"))
print(largestOddNumber("4206"))
print(largestOddNumber("35427"))





# 1903. Largest Odd Number in String
# Easy
# 1.1K
# 72
# Companies
# You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

# A substring is a contiguous sequence of characters within a string.

 

# Example 1:

# Input: num = "52"
# Output: "5"
# Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
# Example 2:

# Input: num = "4206"
# Output: ""
# Explanation: There are no odd numbers in "4206".
# Example 3:

# Input: num = "35427"
# Output: "35427"
# Explanation: "35427" is already an odd number.
 

# Constraints:

# 1 <= num.length <= 105
# num only consists of digits and does not contain any leading zeros.
# Accepted
# 78.3K
# Submissions
# 136.3K
# Acceptance Rate
# 57.5%