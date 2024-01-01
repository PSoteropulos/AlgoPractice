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


def angryProfessor(k, a):
    onTimeCount = 0
    for time in a:
        if time <= 0:
            onTimeCount += 1
    if onTimeCount >= k:
        return "NO"
    elif onTimeCount < k:
        return "YES"

print(angryProfessor(3, [-2, -1, 0, 1, 2]))
print(angryProfessor(3, [-1, -3, 4, 2]))
print(angryProfessor(2, [-1, 0, 1, 2]))



# A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time () to arrived late ().

# Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

# Example




# The first  students arrived on. The last  were late. The threshold is  students, so class will go on. Return YES.

# Note: Non-positive arrival times () indicate the student arrived early or on time; positive arrival times () indicate the student arrived  minutes late.

# Function Description

# Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

# angryProfessor has the following parameter(s):

# int k: the threshold number of students
# int a[n]: the arrival times of the  students
# Returns

# string: either YES or NO
# Input Format

# The first line of input contains , the number of test cases.

# Each test case consists of two lines.

# The first line has two space-separated integers,  and , the number of students (size of ) and the cancellation threshold.
# The second line contains  space-separated integers () that describe the arrival times for each student.