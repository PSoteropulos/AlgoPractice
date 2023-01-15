def getMoneySpent(keyboards, drives, b):
    greatestCost = -1
    for i in keyboards:
        for j in drives:
            if ((i + j <= b) & (i + j > greatestCost)):
                greatestCost = i + j
    return greatestCost

# print(getMoneySpent([40,50,60],[5,8,12],60))
# print(getMoneySpent([3,1],[5,2,8],10))
# print(getMoneySpent([4],[5],5))



# A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

# Example



# The person can buy a , or a . Choose the latter as the more expensive option and return .

# Function Description

# Complete the getMoneySpent function in the editor below.

# getMoneySpent has the following parameter(s):

# int keyboards[n]: the keyboard prices
# int drives[m]: the drive prices
# int b: the budget
# Returns

# int: the maximum that can be spent, or  if it is not possible to buy both items
# Input Format

# The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
# The second line contains  space-separated integers , the prices of each keyboard model.
# The third line contains  space-separated integers , the prices of the USB drives