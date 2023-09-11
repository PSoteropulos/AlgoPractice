def strongPasswordCheckerII(password):
    length = True
    oneLower = False
    oneUpper = False
    oneDigit = False
    oneSpecial = False
    adjacent = True
    specials = "!@#$%^&*()-+"
    if (len(password) < 8):
        length = False
    for i in range(len(password)):
        if ((password[i] == password[i].upper()) and (password[i].lower()!=password[i].upper())):
            oneUpper = True
        if ((password[i] == password[i].lower()) and (password[i].lower()!=password[i].upper())):
            oneLower = True
        if (password[i].isdigit()):
            oneDigit = True
        if (password[i] in specials):
            oneSpecial = True
        if (i < len(password) - 1):
            if (password[i] == password[i+1]):
                adjacent = False
    if (length and oneUpper and oneLower and oneDigit and oneSpecial and adjacent):
        return True
    else :
        return False






print(strongPasswordCheckerII("IloveLe3tcode!"))
print(strongPasswordCheckerII("Me+You--IsMyDream"))
print(strongPasswordCheckerII("1aB!"))






# 2299. Strong Password Checker II
# Easy
# 302
# 36
# Companies
# A password is said to be strong if it satisfies all the following criteria:

# It has at least 8 characters.
# It contains at least one lowercase letter.
# It contains at least one uppercase letter.
# It contains at least one digit.
# It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
# It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
# Given a string password, return true if it is a strong password. Otherwise, return false.

 

# Example 1:

# Input: password = "IloveLe3tcode!"
# Output: true
# Explanation: The password meets all the requirements. Therefore, we return true.
# Example 2:

# Input: password = "Me+You--IsMyDream"
# Output: false
# Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
# Example 3:

# Input: password = "1aB!"
# Output: false
# Explanation: The password does not meet the length requirement. Therefore, we return false.
 

# Constraints:

# 1 <= password.length <= 100
# password consists of letters, digits, and special characters: "!@#$%^&*()-+".
# Accepted
# 34.4K
# Submissions
# 62.2K
# Acceptance Rate
# 55.3%