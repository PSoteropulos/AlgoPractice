def longestPalindrome(s):
    occurrences = {} # init new dict to track occurrence counts
    for char in s: # iterate over string to set occurrence counts
        if char in occurrences.keys(): # set the value to 1 if key:value isnt in map yet, otherwise increment
            occurrences[char] += 1
        else:
            occurrences[char] = 1
    total = 0 # init variable to store length of palindrome
    hasOdd = False # flag to check for odd character count (since this requires subtraction of 1 to make even)
    for count in occurrences.values(): # iterate through map values
        if count%2 == 0: # if even, add it to total length
            total += count
        else:
            hasOdd = True # else set the odd flag, and add the length -1 to palindrome (chars must be pairs except for possibly one char in center)
            total += count - 1
    return total+1 if hasOdd else total # add 1 for the center letter if any odd count (since it will be center/pivot point)







print(longestPalindrome("abccccdd"))
print(longestPalindrome("a"))








# 409. Longest Palindrome
# Easy
# Topics
# Companies
# Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

# Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

# Example 1:

# Input: s = "abccccdd"
# Output: 7
# Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
# Example 2:

# Input: s = "a"
# Output: 1
# Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

# Constraints:

# 1 <= s.length <= 2000
# s consists of lowercase and/or uppercase English letters only.