def thousandSeparator(n):
    stringArray = [*str(n)]
    while True:
        count = 0
        stop = -1
        for i in range(len(stringArray), stop, -1 ):
            count += 1
            if count == 4:
                stringArray.insert(i, ".")
                count = 1
                stop += -1
            if not i-1:
                return "".join(stringArray)







print(thousandSeparator(987))
print(thousandSeparator(1234))






# 1556. Thousand Separator
# Easy
# Topics
# Companies
# Hint
# Given an integer n, add a dot (".") as the thousands separator and return it in string format.

 

# Example 1:

# Input: n = 987
# Output: "987"
# Example 2:

# Input: n = 1234
# Output: "1.234"
 

# Constraints:

# 0 <= n <= 231 - 1
# Accepted
# 45.1K
# Submissions
# 83.3K
# Acceptance Rate
# 54.2%