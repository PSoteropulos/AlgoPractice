def minOperations(logs):
    position = 0
    for char in logs:
        if char=="../" and position > 0:
            position -= 1
        elif char=="./" or (char=="../" and position == 0):
            continue
        else:
            position += 1
    return position





print(minOperations(["d1/","d2/","../","d21/","./"]))
print(minOperations(["d1/","d2/","./","d3/","../","d31/"]))
print(minOperations(["d1/","../","../","../"]))





# 1598. Crawler Log Folder
# Easy
# 812
# 59
# Companies
# The Leetcode file system keeps a log each time some user performs a change folder operation.

# The operations are described below:

# "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
# "./" : Remain in the same folder.
# "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
# You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

# The file system starts in the main folder, then the operations in logs are performed.

# Return the minimum number of operations needed to go back to the main folder after the change folder operations.

 

# Example 1:



# Input: logs = ["d1/","d2/","../","d21/","./"]
# Output: 2
# Explanation: Use this change folder operation "../" 2 times and go back to the main folder.
# Example 2:



# Input: logs = ["d1/","d2/","./","d3/","../","d31/"]
# Output: 3
# Example 3:

# Input: logs = ["d1/","../","../","../"]
# Output: 0
 

# Constraints:

# 1 <= logs.length <= 103
# 2 <= logs[i].length <= 10
# logs[i] contains lowercase English letters, digits, '.', and '/'.
# logs[i] follows the format described in the statement.
# Folder names consist of lowercase English letters and digits.
# Accepted
# 61.7K
# Submissions
# 95.5K
# Acceptance Rate
# 64.6%