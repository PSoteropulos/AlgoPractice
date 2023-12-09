def isValid(s):
    current = []
    openers = ["(", "[", "{"]
    if len(s)== 1 or s[0] not in openers: return False
    for char in s:
        if len(current):
            if ((current[-1] == "(" and char == ")") or (current[-1] == "[" and char=="]") or (current[-1] == "{" and char =="}")):
                current.pop()
            else:
                current.append(char)
        else:
            current.append(char)
    return False if len(current) else True





print(isValid("()"))
print(isValid("()[]{}"))
print(isValid("(]"))






# 20. Valid Parentheses
# Easy
# Topics
# Companies
# Hint
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.
 

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false
 

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.