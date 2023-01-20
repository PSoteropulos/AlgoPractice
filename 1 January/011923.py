def permutationEquation(p):
    yArray = []
    for x in range(1, len(p)+1):
        firstIndex = 0
        y = 0
        for i in range(len(p)):
            if (p[i] == x):
                firstIndex = i+1
        for j in range(len(p)):
            if(p[j] == firstIndex):
                y = j+1
        yArray.append(y)
    return yArray

print(permutationEquation([5,2,1,3,4]))
print(permutationEquation([2,3,1]))
print(permutationEquation([4,3,5,1,2]))






# Given a sequence of  integers,  where each element is distinct and satisfies . For each  where , that is  increments from  to , find any integer  such that  and keep a history of the values of  in a return array.

# Example


# Each value of  between  and , the length of the sequence, is analyzed as follows:

# , so 
# , so 
# , so 
# , so 
# , so 
# The values for  are .

# Function Description

# Complete the permutationEquation function in the editor below.

# permutationEquation has the following parameter(s):

# int p[n]: an array of integers
# Returns

# int[n]: the values of  for all  in the arithmetic sequence  to 
# Input Format

# The first line contains an integer , the number of elements in the sequence.
# The second line contains  space-separated integers  where .

# Constraints

# , where .
# Each element in the sequence is distinct.