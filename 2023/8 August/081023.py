def canConstruct(ransomNote, magazine):
    ransomNoteArray = [*ransomNote]
    magazineArray = [*magazine]
    running = True
    while running:
        changed = False
        for i in range(len(ransomNoteArray)-1, -1, -1):
            if ransomNoteArray[i] in magazineArray:
                index = magazineArray.index(ransomNoteArray[i])
                ransomNoteArray.pop(i)
                magazineArray.pop(index)
                changed = True
        if (changed == False):
            running = False
    return True if len(ransomNoteArray) == 0 else False






print(canConstruct("a", magazine = "b"))
print(canConstruct("aa", magazine = "ab"))
print(canConstruct("aa", magazine = "aab"))






# 383. Ransom Note
# Easy
# 4.3K
# 443
# Companies
# Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

# Each letter in magazine can only be used once in ransomNote.

 

# Example 1:

# Input: ransomNote = "a", magazine = "b"
# Output: false
# Example 2:

# Input: ransomNote = "aa", magazine = "ab"
# Output: false
# Example 3:

# Input: ransomNote = "aa", magazine = "aab"
# Output: true
 

# Constraints:

# 1 <= ransomNote.length, magazine.length <= 105
# ransomNote and magazine consist of lowercase English letters.
# Accepted
# 838.5K
# Submissions
# 1.4M
# Acceptance Rate
# 58.9%