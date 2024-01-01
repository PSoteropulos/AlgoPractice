def prefixCount(words, pref):
    counts = 0
    for word in words:
        prefMatch = True
        if len(word) >= len(pref):
            for j in range(len(pref)):
                if word[j] != pref[j]:
                    prefMatch = False
            if prefMatch == True:
                counts += 1
    return counts



print(prefixCount(["pay","attention","practice","attend"], "at"))
print(prefixCount(["leetcode","win","loops","success"], "code"))



# 2185. Counting Words With a Given Prefix
# Easy
# 525
# 14
# Companies
# You are given an array of strings words and a string pref.

# Return the number of strings in words that contain pref as a prefix.

# A prefix of a string s is any leading contiguous substring of s.

 

# Example 1:

# Input: words = ["pay","attention","practice","attend"], pref = "at"
# Output: 2
# Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
# Example 2:

# Input: words = ["leetcode","win","loops","success"], pref = "code"
# Output: 0
# Explanation: There are no strings that contain "code" as a prefix.
 

# Constraints:

# 1 <= words.length <= 100
# 1 <= words[i].length, pref.length <= 100
# words[i] and pref consist of lowercase English letters.
# Accepted
# 62K
# Submissions
# 80.2K
# Acceptance Rate
# 77.3%