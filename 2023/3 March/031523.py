def countConsistentStrings(allowed, words):
    count = 0
    for i in range(len(words)):
        localWordArray = [*words[i]]
        valid = True
        for j in range(len(localWordArray)):
            if localWordArray[j] not in allowed:
                valid = False
        if valid == True:
            count += 1
    return count





print(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]))
print(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]))
print(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]))



# 1684. Count the Number of Consistent Strings
# Easy
# 1.4K
# 55
# Companies
# You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

# Return the number of consistent strings in the array words.

 

# Example 1:

# Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
# Output: 2
# Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
# Example 2:

# Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
# Output: 7
# Explanation: All strings are consistent.
# Example 3:

# Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
# Output: 4
# Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

# Constraints:

# 1 <= words.length <= 104
# 1 <= allowed.length <= 26
# 1 <= words[i].length <= 10
# The characters in allowed are distinct.
# words[i] and allowed contain only lowercase English letters.
# Accepted
# 124.3K
# Submissions
# 151.2K
# Acceptance Rate
# 82.2%