import math

def plusMinus(arr):
    positive = 0
    negative = 0
    zero = 0
    for x in arr:
        if x > 0:
            positive += 1
        if x < 0:
            negative +=1
        if x == 0:
            zero += 1
    print("{0:.6f}".format(positive/len(arr)))
    print("{0:.6f}".format(negative/len(arr)))
    print("{0:.6f}".format(zero/len(arr)))

plusMinus([1,1, 0,-1, -1])