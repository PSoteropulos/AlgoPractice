def lonelyinteger(a):
    for i in range(len(a)):
        occurredTwice = False
        for j in range(len(a)):
            if (a[j] == a[i]) and ( i != j ):
                occurredTwice = True
        if occurredTwice == False:
            return a[i]
        


print(lonelyinteger([1,2,3,4,3,2,1]))
print(lonelyinteger([1,2,3,4,5,4,6,6,3,2,1]))