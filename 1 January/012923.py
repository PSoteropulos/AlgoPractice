def marsExploration(s):
    altered = 0
    for i in range(0,len(s),3):
        print("i", i)
        print("s[i]",s[i])
        if (s[i] != "S"):
            altered += 1
    for h in range(1,len(s)+1,3):
        print("h",h)
        print("s[h]",s[h])
        if (s[h] != "O"):
            altered +=1
    for j in range(2,len(s)+1,3):
        print("j", j)
        print("s[j]",s[j])
        if (s[j] != "S"):
            altered +=1
    return altered


# print(marsExploration("SOSTOT"))
# print(marsExploration("SOSSPSSQSSOR"))
# print(marsExploration("SOSSOT"))
print(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"))




# A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

# NASA_Mars_Rover.jpg

# Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.

# Example


# The original message was SOSSOS. Two of the message's characters were changed in transit.

# Function Description

# Complete the marsExploration function in the editor below.

# marsExploration has the following parameter(s):

# string s: the string as received on Earth
# Returns

# int: the number of letters changed during transmission
# Input Format

# There is one line of input: a single string, .

# Constraints

#  will contain only uppercase English letters, ascii[A-Z].