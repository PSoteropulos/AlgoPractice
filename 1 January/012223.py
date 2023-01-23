def findDigits(n):
    numString = str(n)
    stringArray = [ ]
    divisorCount = 0
    for string in numString:
        stringArray.append(string)
    for num in stringArray:
        numInt = int(num)
        if ((numInt != 0) and (n % numInt == 0)):
            divisorCount += 1
    return divisorCount



print(findDigits(124))
print(findDigits(111))
print(findDigits(10))
print(findDigits(12))
print(findDigits(1012))




# An integer  is a divisor of an integer  if the remainder of .

# Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

# Example

# Check whether ,  and  are divisors of . All 3 numbers divide evenly into  so return .


# Check whether , , and  are divisors of . All 3 numbers divide evenly into  so return .


# Check whether  and  are divisors of .  is, but  is not. Return .

# Function Description

# Complete the findDigits function in the editor below.

# findDigits has the following parameter(s):

# int n: the value to analyze
# Returns

# int: the number of digits in  that are divisors of 
# Input Format

# The first line is an integer, , the number of test cases.
# The  subsequent lines each contain an integer, .