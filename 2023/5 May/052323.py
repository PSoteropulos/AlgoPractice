def checkString(s):
    letter = s[0]
    changeCount = 0
    for char in s:
        if letter != char:
            letter = char
            changeCount += 1
    if changeCount >=1 and s[len(s)-1] == "a":
        return False
    elif changeCount <= 1:
        return True
    else:
        return False





print(checkString("aaabbb"))
print(checkString("abab"))
print(checkString("bbb"))





# 2124. Check if All A's Appears Before All B's
# Easy
# 609
# 14
# Companies
# Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

 

# Example 1:

# Input: s = "aaabbb"
# Output: true
# Explanation:
# The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
# Hence, every 'a' appears before every 'b' and we return true.
# Example 2:

# Input: s = "abab"
# Output: false
# Explanation:
# There is an 'a' at index 2 and a 'b' at index 1.
# Hence, not every 'a' appears before every 'b' and we return false.
# Example 3:

# Input: s = "bbb"
# Output: true
# Explanation:
# There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
 

# Constraints:

# 1 <= s.length <= 100
# s[i] is either 'a' or 'b'.
# Accepted
# 54.7K
# Submissions
# 76.9K
# Acceptance Rate
# 71.2%