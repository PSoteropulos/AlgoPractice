def makeGood(s):
    running = True
    s = [*s]
    def isUpperCase(string):
        return string.upper() == string
    while (running == True):
        change = False
        for i in range(len(s)-1):
            if ((s[i].lower()==s[i] and s[i+1]==s[i+1].upper() and s[i]==s[i+1].lower()) or (s[i+1].lower()==s[i+1] and s[i]==s[i].upper() and s[i+1]==s[i].lower())):
                s.pop(i+1)
                s.pop(i)
                change = True
                break
        if (change==False):
            running=False
    string = ""
    return string.join(s)



print(makeGood("leEeetcode"))
print(makeGood("abBAcC"))
print(makeGood("s"))






# 1544. Make The String Great
# Easy
# 2.3K
# 104
# Companies
# Given a string s of lower and upper case English letters.

# A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

# 0 <= i <= s.length - 2
# s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
# To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

# Return the string after making it good. The answer is guaranteed to be unique under the given constraints.

# Notice that an empty string is also good.

 

# Example 1:

# Input: s = "leEeetcode"
# Output: "leetcode"
# Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
# Example 2:

# Input: s = "abBAcC"
# Output: ""
# Explanation: We have many possible scenarios, and all lead to the same answer. For example:
# "abBAcC" --> "aAcC" --> "cC" --> ""
# "abBAcC" --> "abBA" --> "aA" --> ""
# Example 3:

# Input: s = "s"
# Output: "s"
 

# Constraints:

# 1 <= s.length <= 100
# s contains only lower and upper case English letters.
# Accepted
# 143.4K
# Submissions
# 227.1K
# Acceptance Rate
# 63.2%