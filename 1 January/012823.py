import math

def chocolateFeast(n, c, m):
    startingBars = math.floor(n/c)
    totalBarsEaten = startingBars
    currentWrappers = startingBars
    while (currentWrappers >= m):
        print("beginning of iteration totalbarseaten and currentwrappers", totalBarsEaten, currentWrappers)
        newBars = math.floor(currentWrappers/m)
        turnedInWrappers = (newBars*m)
        print("turnedinwrappers", turnedInWrappers)
        print("newbars", newBars)
        leftOverWrappers = currentWrappers%m
        print("leftoverwrappers before eating new bars", leftOverWrappers)
        totalBarsEaten += newBars
        print("currentWrappers before calc", currentWrappers)
        currentWrappers = leftOverWrappers + newBars
        print("currentWrappers after calc", currentWrappers)
    return totalBarsEaten


print(chocolateFeast(15, 3, 2))
print(chocolateFeast(10, 2, 5))
print(chocolateFeast(12, 4, 4))
print(chocolateFeast(6, 2, 2))
print(chocolateFeast(7, 3, 2))





# Little Bobby loves chocolate. He frequently goes to his favorite  store, Penny Auntie, to buy them. They are having a promotion at Penny Auntie. If Bobby saves enough wrappers, he can turn them in for a free chocolate.

# Example



# He has  to spend, bars cost , and he can turn in  wrappers to receive another bar. Initially, he buys  bars and has  wrappers after eating them. He turns in  of them, leaving him with , for  more bars. After eating those two, he has  wrappers, turns in  leaving him with  wrapper and his new bar. Once he eats that one, he has  wrappers and turns them in for another bar. After eating that one, he only has  wrapper, and his feast ends. Overall, he has eaten  bars.

# Function Description

# Complete the chocolateFeast function in the editor below.

# chocolateFeast has the following parameter(s):

# int n: Bobby's initial amount of money
# int c: the cost of a chocolate bar
# int m: the number of wrappers he can turn in for a free bar
# Returns

# int: the number of chocolates Bobby can eat after taking full advantage of the promotion
# Note: Little Bobby will always turn in his wrappers if he has enough to get a free chocolate.

# Input Format

# The first line contains an integer, , the number of test cases to analyze.
# Each of the next  lines contains three space-separated integers: , , and . They represent money to spend, cost of a chocolate, and the number of wrappers he can turn in for a free chocolate.