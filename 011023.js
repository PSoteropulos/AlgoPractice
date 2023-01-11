const sockMerchant = (n, ar) => {
    let newArray = ar
    console.log("newarray", newArray)
    let pairCount = 0
    for (let i = n-1; i >= 0; i--){
        console.log("first for loop step", i, "value at this index is", newArray[i])
        for (let j=0;j<i; j++){
            console.log("second for loop step", j, "value at this index is", newArray[j])
            if (newArray[i] == newArray[j] && newArray[i]!=undefined){
                newArray.splice(j, 1);
                console.log("newarray after first splice", newArray)
                newArray.splice(i-1, 1)
                console.log("newarray after second splice", newArray)
                pairCount ++
                console.log(pairCount)
            }
        }
    }

    return pairCount
}

// console.log(sockMerchant(7, [1,2,1,2,1,3,2]))
// console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))



// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.