def interpret(command):
    interpretedString = ""
    for i in range(len(command)):
        if (command[i] == "G"):
            interpretedString += "G"
        elif (command[i] == "("):
            if (command[i+1] == ")"):
                interpretedString += "o"
            elif (command[i+1] == "a"):
                interpretedString += "al"
    return interpretedString


print(interpret("G()(al)"))
print(interpret("G()()()()(al)"))
print(interpret("(al)G(al)()()G"))





# 1678. Goal Parser Interpretation
# Easy
# 1.2K
# 80
# Companies
# You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

# Given the string command, return the Goal Parser's interpretation of command.

 

# Example 1:

# Input: command = "G()(al)"
# Output: "Goal"
# Explanation: The Goal Parser interprets the command as follows:
# G -> G
# () -> o
# (al) -> al
# The final concatenated result is "Goal".
# Example 2:

# Input: command = "G()()()()(al)"
# Output: "Gooooal"
# Example 3:

# Input: command = "(al)G(al)()()G"
# Output: "alGalooG"
 

# Constraints:

# 1 <= command.length <= 100
# command consists of "G", "()", and/or "(al)" in some order.